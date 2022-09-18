import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function putData(urlApi, dataUpdate) {
  const response = fetch(urlApi, {
    method: "PUT",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  });
  return response;
}

const dataUpdate = {
  title: "Se puede cambiar tambien otras caracteristicas",
  price: 10,
};

putData(`${API}/products/229`, dataUpdate)
  .then((response) => response.json())
  .then((dataUpdate) => console.log(dataUpdate));
