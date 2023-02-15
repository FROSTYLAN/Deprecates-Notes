/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");

// web api
// Conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  // Procesar la respuesta y convertirla en JSON
  .then((res) => res.json())
  // JSON -> Data -> Redenrizar info browser
  .then((resJson) => {
    const allItems = [];
    resJson.data.forEach((item) => {
      console.log(item.name);
      // crear imagen
      const image = document.createElement("img");
      image.src = `${baseUrl}${item.image}`;

      // crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;

      // crear precio
      const price = document.createElement("div");
      price.textContent = item.price;

      const container = document.createElement("div");
      container.append(image, title, price);
      allItems.push(container);
    });

    appNode.append(...allItems);
  });
