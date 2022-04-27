// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i++) {
	console.log(i);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.

for (let i = 0; i <= 9; i++) {
	if (i % 2 == 0) console.log(i);
}

// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle empieza en 0 y termina en 10.

for (let i = 0; i < 11; i++) {
	console.log(i + " ovejas");
}

// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let i = 0; i < 11; i++) {
	if (i <= 9) console.log(i + " intentando dormir");
	else if (i >= 10) console.log(i + " dormido!");
}
