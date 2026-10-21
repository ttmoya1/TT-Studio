// La navegación y el contenido también funcionan sin JavaScript.
document.documentElement.classList.add("js");

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Actualiza el estado visual y accesible del menú.
function setMenu(open) {
  menuBtn.setAttribute("aria-expanded", String(open));

  menuBtn.setAttribute(
    "aria-label",
    open ? "Cerrar menú" : "Abrir menú"
  );

  menu.classList.toggle("is-open", open);
}

// Abrir o cerrar al presionar el botón.
menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

  setMenu(!isOpen);
});

// Cerrar al seleccionar una sección.
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setMenu(false);
  });
});

// Cerrar con Escape y devolver el foco al botón.
document.addEventListener("keydown", (event) => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

  if (event.key === "Escape" && isOpen) {
    setMenu(false);
    menuBtn.focus();
  }
});

// Cerrar al hacer clic fuera del menú.
document.addEventListener("click", (event) => {
  if (
    !menu.contains(event.target) &&
    !menuBtn.contains(event.target)
  ) {
    setMenu(false);
  }
});

// Restablecer el menú al cambiar entre celular y escritorio.
window
  .matchMedia("(min-width: 641px)")
  .addEventListener("change", () => {
    setMenu(false);
  });