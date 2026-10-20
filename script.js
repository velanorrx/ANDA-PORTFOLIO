/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });



/* =========================================================
   PROJECT FILTER
========================================================= */

const filters =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        /* Remove active state */

        filters.forEach(button => {

            button.classList.remove("active");

        });

        /* Activate clicked button */

        filter.classList.add("active");


        const selectedCategory =
            filter.dataset.filter;


        projects.forEach(project => {

            const categories =
                project.dataset.category;


            if (
                selectedCategory === "all" ||
                categories.includes(selectedCategory)
            ) {

                project.style.display = "block";

                setTimeout(() => {

                    project.style.opacity = "1";

                    project.style.transform =
                        "translateY(0)";

                }, 50);

            } else {

                project.style.opacity = "0";

                project.style.transform =
                    "translateY(15px)";

                setTimeout(() => {

                    project.style.display = "none";

                }, 250);

            }

        });

    });

});



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".project-card, .timeline-item, .about-content, .about-image"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});



/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



/* =========================================================
   SIMPLE HOVER EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -2;

        const rotateY =
            ((x / rect.width) - 0.5) * 2;


        card.style.transform =
            `translateY(-7px)
             perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});