function greeting() {
  let username = "Charles";

  function displayUserName() {
    return `Hola ${username}`;
  }
  return displayUserName;
}

const g = greeting();

console.log(g);
console.log(g());
