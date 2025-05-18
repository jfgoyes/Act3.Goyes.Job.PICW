/*
Actividad 1: Clasificación de edades
*/

// Petición al usuario usando prompt.
let edad = prompt("¿Cuál es su edad?");

// Conversión del valor ingresado por el usuario a valor numérico.
edad = Number(edad);

// Implementación de los IFs anidados para indicar las condiciones propuestas.
if (isNaN (edad)) { // Si se ingresa un valor no numérico isNaN (is Not a Number).
    console.log ("[Clasificación de edades] Edad no válida");
    console.log ("");
} else {
    if (edad < 0) { // Rango de edad valores menores que 0.
        console.log ("[Clasificación de edades] Edad no válida");
        console.log ("");
    } if (edad >= 0 && edad <= 12) { // Rango de edad 0 a 12.
        console.log ("[Clasificación de edades] Niño");
        console.log ("");
    } if (edad >= 13 && edad <= 17) { // Rango de edad 13 a 17.
        console.log ("[Clasificación de edades] Adolescente");
        console.log ("");
    } if (edad >= 18 && edad <= 59) { // Rango de edad 18 a 59.
        console.log ("[Clasificación de edades] Adulto");
        console.log ("");
    } if (edad >= 60 && edad <= 125) { // Rango de edad 60 a 125.
        console.log ("[Clasificación de edades] Adulto mayor");
        console.log ("");
    } else if (edad >= 126) { // Rango de edad valores iguales o mayores que 126.
        console.log ("[Clasificación de edades] Adulto mayor");
        console.log ("");
    }
}