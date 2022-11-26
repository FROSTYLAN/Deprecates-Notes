console.log("Hola TypeScript");

function add(a: number, b: number)  {
    return a + b;
}

let sum = add(2,5);

console.log(sum);


// TIPOS BÁSICOS

// boolean
let muted: boolean = true;
muted = false;

// números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// string
let nombre: string = 'Charles';
let saludo = `Me llamo ${nombre}.`

// arreglos

let people: string[] = [];
people = ['Isabel', 'Nicole', 'Charles'];
// people.push(9000);

let peopleAndNumbers: Array<string|number> = [];
peopleAndNumbers.push('Miguel Ignacio de las Casas');
peopleAndNumbers.push(8);

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let favoriteColor: Color = Color.Azul;
console.log(`Mi color favorito es ${favoriteColor}`);

// Any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};

// Object 
let someObject: object = {type: 'Wildcard'};