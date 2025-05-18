/*
Actividad 3: Tablas pares o impares
*/

// Petición al usuario usando prompt.
let tablas_seleccionadas = prompt("¿Desea visualizar tablas pares o impares?");
/*
Conversión del texto (ingresado por el usuario) a minúsculas, con el
fin de evitar problemas si el usuario escribe cualquier palabra con
mayúsculas por ejemplo "Pares", "PARES", "pArES", etc... Para esto se
utiliza la sentencia toLowerCase.
*/
tablas_seleccionadas = tablas_seleccionadas.toLowerCase();

// Se hace la validación de la opción escrita por el usuario.
if (tablas_seleccionadas === "pares") {
    // Mensaje para mostrar el valor ingresado por el usuario.
    console.log ("[Tablas pares/impares] valor ingresado: " + tablas_seleccionadas);
    console.log ("");
    // Implementación del primer bucle FOR para identificar los números pares.
    for (let numero_par = 2; numero_par <= 10; numero_par += 2) { // Valor inicial; valor final; incremento 2 en 2.
        console.log ("[Tablas pares/impares] Tabla del número: " + numero_par); // Mensaje para mostrar a que número pertenece la respectiva tabla.
        /*
        Implementación del segundo bucle FOR para establecer los valores a multiplicar del 1 hasta el 12, 
        por ejemplo 2x1, 2x2, ..., 2x12.
        */
        for (let valor_tabla = 1; valor_tabla <= 12; valor_tabla++) { // Valor inicial; valor final; incremento 1 en 1.
            // Mensaje para mostrar la multiplicación en secuencia del valor ingresado.
            console.log (numero_par + " x " + valor_tabla + " = " + (numero_par * valor_tabla));
        }
        console.log (""); // Espacio para las tablas generadas.
    }
} else if (tablas_seleccionadas === "impares") {
    // Mensaje para mostrar el valor ingresado por el usuario.
    console.log ("[Tablas pares/impares] valor ingresado: " + tablas_seleccionadas);
    console.log ("");
    // Implementación del tercer bucle FOR para identificar los números impares.
    for (let numero_impar = 1; numero_impar <= 10; numero_impar += 2) { // Valor inicial; valor final; incremento 2 en 2.
        console.log ("[Tablas pares/impares] Tabla del número: " + numero_impar); // Mensaje para mostrar a que número pertenece la respectiva tabla.
        /*
        Implementación del cuarto bucle FOR para establecer los valores a multiplicar del 1 hasta el 12, 
        por ejemplo 3x1, 3x2, ..., 3x12.
        */
        for (let valor_tabla = 1; valor_tabla <= 12; valor_tabla++) { // Valor inicial; valor final; incremento 1 en 1.
            // Mensaje para mostrar la multiplicación en secuencia del valor ingresado.
            console.log (numero_impar + " x " + valor_tabla + " = " + (numero_impar * valor_tabla));
        }
        console.log (""); // Espacio para las tablas generadas.
    }
} else {
    // Mensaje advertencia en caso de que el usuario especifique cualquier otro caracter.
    console.log ("[Tablas pares/impares] Valor ingresado inválido, escriba pares o impares");
}