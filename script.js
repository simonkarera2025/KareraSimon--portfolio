document.addEventListener("DOMContentLoaded",
    function () {
        console.log("Portfolio loaded successfully!");

        const form = document.querySelector("form");

        form.addEventListener("submit", function (event)
    {
        event.preventDefault();

        alert("Thanks for contacting me!");

        form.reset();
    });

    const sections =
    document.querySelectorAll("section");

    const Observer = new
    IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remmove("show");
            }
        });
    });

    sections.forEach(function (section) {
        Observer.observe(section);
    });
    });