const navMenu = () => {
  const burger = document.querySelector(".humberger-menu");
  const nav = document.querySelector(".desktop-nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
    })
  );
};
navMenu();
// single Project section modal
