/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};

// Intl
// 1 - format dates
// 2 - format money

// web api
// Conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  //procesar la respuesta y convertirla a json
  .then((respuesta) => respuesta.json())
  //JSON -> Data -> Renderizar info browser
  .then((respuestaJson) => {
    const todosLosItems = [];
    respuestaJson.data.forEach((item) => {
      //Crear imagen
      const imagen = document.createElement("img");
      imagen.src = `${baseUrl}${item.image}`;
      imagen.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

      //Crear titulo
      const titulo = document.createElement("h2");
      titulo.innerText = item.name;
      titulo.className = "text-lg";
      // title.style = "font-size: 3rem";
      // title.style.fontSize = "3rem";
      // title.className = "muy-grande";

      //Crear precio
      const precio = document.createElement("div");
      precio.textContent = formatPrice(item.price);
      precio.className = "text-gray-600";

      //Wrap price & title
      const priceAndTitle = document.createElement("div");
      priceAndTitle.className = "text-left w-48 ml-6";
      priceAndTitle.append(titulo, precio);

      //Wrap Img and priceAndTitle
      const card = document.createElement("div");
      card.className =
        "flex bg-white rounded-lg p-6 hover:bg-gray-300 m-2 w-80";
      card.append(imagen, priceAndTitle);
      console.log(card);

      todosLosItems.push(card);
    });
    appNode.append(...todosLosItems);
  });
