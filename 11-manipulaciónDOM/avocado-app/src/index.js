/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

// web api
// Conectarnos al server
window
  .fetch(url)
  // Procesar la respuesta y convertirla en JSON
  .then((res) => res.json())
  // JSON -> Data -> Redenrizar info browser
  .then((resJson) => {
    const allItems = [];
    resJson.data.forEach((item) => {
      console.log(item.name);
      // crear imagen
      const image = document.createElement("img");

      // crear titulo
      const title = document.createElement("h2");

      // crear precio
      const price = document.createElement("div");

      const container = document.createElement("div");
      container.append(image, title, price);
      allItems.push(container);
    });
    document.body.append(...allItems);
  });
