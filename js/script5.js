//# Snack 5
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

let numbersOne = [];
let numbersTwo = [];

const randomLengthOne = Math.floor(Math.random() * 4) + 1;
const randomLengthTwo = Math.floor(Math.random() * 4) + 1;

while (numbersOne.length < randomLengthOne) {
	let digit = Math.floor(Math.random() * 10);
	numbersOne.push(digit);
}

console.table(numbersOne);

while (numbersTwo.length < randomLengthTwo) {
	let digit = Math.floor(Math.random() * 10);
	numbersTwo.push(digit);
}

console.table(numbersTwo);

let difference = numbersOne.length - numbersTwo.length;
console.log('Differenza: ' + difference);



if (difference < 0) {
	console.log('Il PRIMO è più corto');
	while ((difference * -1) === 0) {
		let digit = Math.floor(Math.random() * 10);
		numbersOne.push(digit);
	}
} else if (difference > 0) {
	console.log('Il SECONDO è più corto');
} else {
	console.log('Sono lunghi uguale');
}


console.table('numbersOne: ' + numbersOne.length);
console.table('numbersTwo: ' + numbersTwo.length);