let section = document.querySelector(".our-skills");
let span = document.querySelectorAll(".skill span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 100) {
        span.forEach((span) => {
            span.style.width = span.dataset.width
        });
    } else {
        span.forEach((span) => {
            span.style.width = 0;
        });
    }
}
