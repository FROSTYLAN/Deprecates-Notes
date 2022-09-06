const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const carMenuIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
carMenuIcon.addEventListener("click", toggleCarMenuAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) shoppingCartContainer.classList.add("inactive");

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) shoppingCartContainer.classList.add("inactive");

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarMenuAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");

  if (isMobileMenuOpen || isDesktopMenuOpen) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }

  const isProductDetailOpen =
    productDetailContainer.classList.contains("inactive");
  if (!isProductDetailOpen) productDetailContainer.classList.add("inactive");

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function renderProduct(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", openProductDetailAside);

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
