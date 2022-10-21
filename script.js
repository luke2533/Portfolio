function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var nav = document.getElementById("home");
    nav.classList.toggle("dark-mode");

    var portfolio = document.getElementById("portfolio");
    portfolio.classList.toggle("white-text");

    var prime = document.getElementById("prime");
    prime.classList.toggle("portfolio-dark-text-block");

    var coinvue = document.getElementById("coinvue");
    coinvue.classList.toggle("portfolio-dark-text-block");

    var hydra = document.getElementById("hydra");
    hydra.classList.toggle("portfolio-dark-text-block");

    var about = document.getElementById("about-scroll");
    about.classList.toggle("portfolio-dark-text-block");

    document.getElementById("moon").src = "images/moon_light.png";
}
