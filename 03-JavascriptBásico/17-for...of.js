var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

var string = "Charles";
for (letter in string) {
  console.log(string[letter]);
}
