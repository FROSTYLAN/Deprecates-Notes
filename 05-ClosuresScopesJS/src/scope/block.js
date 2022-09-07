function fruits() {
  if (true) {
    var fruit1 = "Apple"; // Function scope
    let fruit2 = "Kiwi"; // Blosck scope
    const fruit3 = "Banana"; // Blosck scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();
