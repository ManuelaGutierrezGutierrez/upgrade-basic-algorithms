// Se han mantenido las constantes (const) del ejercicio. Eso hace que salga error en visual. Pero si se prueban individualmente, funcionan.

// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let avenger = avengers[0];
console.log(avenger);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let cambioPrimerElemento = avengers.splice(0, 1, "IRONMAN");
console.log(avengers);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

alert(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

console.log(rickAndMortyCharacters);

const longitud = rickAndMortyCharacters.length;

// Opción A

console.log(rickAndMortyCharacters[longitud - 1]);

// Opción B

let ultimoPersonaje = rickAndMortyCharacters.slice(longitud - 1);
console.log(ultimoPersonaje);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = [
	"Rick",
	"Beth",
	"Jerry",
	"Morty",
	"Summer",
	"Lapiz Lopez",
];

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);

let primerElemento = rickAndMortyCharacters.slice(0, 1);
let ultimoElemento = rickAndMortyCharacters.slice(
	rickAndMortyCharacters.length - 1
);

console.log(
	"El primer elemento es ",
	primerElemento,
	"y el último es ",
	ultimoElemento
);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = [
	"Rick",
	"Beth",
	"Jerry",
	"Morty",
	"Summer",
	"Lapiz Lopez",
];

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
