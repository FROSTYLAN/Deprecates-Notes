var playerOpt = prompt("Escoge piedra, papel o tijera", "");

function play(playerOpt) {
  var option = ["Piedra", "Papel", "Tijera"];
  var computerOpt = option[random(0, 2)];
  if (computerOpt === playerOpt) {
    alert("Han empatado, vuelvan a jugar");
    play(playerOpt);
  } else if (computerOpt === "Papel" || playerOpt === "Tijera") {
    alert("Le cortaste el papel, ganaste");
  } else if (computerOpt === "Papel" || playerOpt === "Piedra") {
    alert("Te taparon la piedra, perdiste");
  } else if (computerOpt === "Piedra" || playerOpt === "Papel") {
    alert("Le tapaste la piedra, ganaste");
  } else if (computerOpt === "Piedra" || playerOpt === "Tijera") {
    alert("Te aplastaron la tijera, perdiste");
  } else if (computerOpt === "Tijera" || playerOpt === "Piedra") {
    alert("Le aplastaste la tijera, perdiste");
  } else if (computerOpt === "Tijera" || playerOpt === "Papel") {
    alert("Te cortaron el papel, perdiste");
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

play(playerOpt);
