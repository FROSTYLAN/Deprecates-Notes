const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const carMenuIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
carMenuIcon.addEventListener("click", toggleCarMenuAside);

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) aside.classList.add("inactive");

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) aside.classList.add("inactive");

  mobileMenu.classList.toggle("inactive");
}

function toggleCarMenuAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");

  if (isMobileMenuOpen || isDesktopMenuOpen) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}
