const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const carMenuIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

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

function renderProduct(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divInfo = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const figureInfo = document.createElement("figure");
    const iconCart = document.createElement("img");
    iconCart.setAttribute("src", "../assets/icons/bt_add_to_cart.svg");

    figureInfo.appendChild(iconCart);
    divInfo.append(productPrice, productName);
    productInfo.append(divInfo, figureInfo);
    productCard.append(img, productInfo);
    cardsContainer.appendChild(productCard);
  }
}

const productList = [];
for (let i = 0; i < 20; i++) {
  productList.push({
    name: "Bike",
    price: "120",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}

renderProduct(productList);
