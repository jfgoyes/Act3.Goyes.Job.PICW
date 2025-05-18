/*
Actividad 2: Tabla de multiplicar
*/

// Petición al usuario usando prompt.
let numero_tabla = prompt("Ingrese un número:");

// Conversión del valor ingresado por el usuario a valor numérico.
numero_tabla = Number(numero_tabla);

// Comprobación si el número ingresado es válido.
if (isNaN (numero_tabla)) { // Si se ingresa un valor no numérico isNaN (is Not a Number).
    console.log ("[Tabla de multiplicar] Número no válido");
} else {
    // Mensaje para mostrar el número ingresado por el usuario.
    console.log ("[Tabla de multiplicar] Tabla del número: " + numero_tabla);
    /*
    Implementación del bucle FOR para multiplicar el valor ingresado, desde
    1 hasta 12, es decir por ejemplo: 5x1, 5x2, ..., 5x12.
    */
    for (let valor_tabla = 1; valor_tabla <= 12; valor_tabla++) { // Valor inicial; valor final; incremento 1 en 1.
        let resultado_tabla = numero_tabla * valor_tabla; // Estructura de la multiplicación.
        // Mensaje para mostrar la multiplicación en secuencia del valor ingresado.
        console.log (numero_tabla + " x " + valor_tabla + " = " + resultado_tabla);
    }
    console.log (""); // Espacio final para la tabla generada.
}