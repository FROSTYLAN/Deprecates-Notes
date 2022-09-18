import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function deleteData(urlApi) {
  const response = fetch(urlApi, {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

const idNumber = 228;

deleteData(`${API}/products/${idNumber}`).then(() => {
  console.log(`Borrado ${idNumber}`);
});
