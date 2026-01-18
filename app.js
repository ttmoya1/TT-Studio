const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const sections = document.querySelectorAll(".content");
const home = document.getElementById("home");
const items = document.querySelectorAll(".menu li");

let open = false;

menuBtn.addEventListener("click", () => {
    open = !open;
    menu.style.left = open ? "0" : "-260px";
});

items.forEach(item => {
    item.addEventListener("click", () => {
        const sectionId = item.getAttribute("data-section");

        // Oculta todo
        sections.forEach(sec => sec.style.display = "none");
        home.style.display = "none";

        // Si es inicio, muestra home
        if (sectionId === "home") {
            home.style.display = "flex";
        } else {
            document.getElementById(sectionId).style.display = "block";
        }

        // Cierra menú
        menu.style.left = "-260px";
        open = false;
    });
});
