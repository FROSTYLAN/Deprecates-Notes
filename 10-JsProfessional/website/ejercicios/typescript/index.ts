console.log("Hola TypeScript");

// function add(a: number, b: number)  {
//     return a + b;
// }

// let sum = add(2,5);

// console.log(sum);


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


// FUNCIONES

function add(a: number, b: number): number {
    return a + b;
}
const sum = add(4,6);


function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlus = addFour(6);


function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}
const user1 = fullName('Charles');

function nameCastilloFamily(firstName: string, lastName: string = 'Castillo'): string {
    return `${firstName} ${lastName}`;
}
const user2 = nameCastilloFamily('Deyvis');


// INTEFACES

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
};

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Azul,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);


console.log(rect.toString());

rect.toString = function () {
    return this.color ?  `Un rectangulo ${this.color}` : "Un rectángulo";
}

console.log(rect.toString());
