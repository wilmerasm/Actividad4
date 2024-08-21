// Algoritmo 1

// Lista de años a verificar
let years = [1278, 1904, 3367, 7182, 2032];

/**
 * Función que determina si los años en la lista son bisiestos o no.
 * También cuenta el número de años bisiestos y no bisiestos.
 */

function esBisiesto() {

    // Contadores para los años bisiestos y no bisiestos

    let contar = 0
    let contar2 = 0

    // Itera sobre cada año en la lista
    for (let index = 0; index < years.length; index++) {

        // Obtiene el año actual de la lista
        let year = years[index];

        // Determina si el año es bisiesto
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

            // Si es bisiesto, incrementa el contador de años bisiestos
            let mensaje = `${year} = Es un año bisiesto.`;
            contar++;
            console.log(mensaje); // Imprime el resultado en la consola
        } else {

            // Si no es bisiesto, incrementa el contador de años no bisiestos
            let mensaje2 = `${year} = No un año bisiesto.`;
            contar2++;
            console.log(mensaje2); // Imprime el resultado en la consola
        }

    }

    // Imprime los totales de años bisiestos y no bisiestos
    console.log("\n=====  Total años bisiestos =====");
    console.log(`\nLa lista tiene ${contar} año bisiestos.`)
    console.log(`\nLa lista tiene ${contar2} año no bisiestos.`)
}



// Algoritmo 2

// Lista de temperaturas en grados Celsius
let celsius = [45, 123, 87, 256, 39];

/**
 * Función que convierte una lista de temperaturas en grados Celsius a Fahrenheit.
 * Imprime el resultado de cada conversión en la consola.
 */
function celsiusAFahrenheit() {

    // Inicializa el índice para el bucle while
    let i = 0

    // Bucle while que recorre la lista de temperaturas en grados Celsius
    while (i < celsius.length) {

        // Obtiene la temperatura actual en grados Celsius
        let celsiu = celsius[i];

        // Convierte la temperatura de Celsius a Fahrenheit
        let fahrenheit = celsiu * (9 / 5) + 32;

        // Imprime la conversión
        console.log(`${celsiu}°C es igual a ${fahrenheit} °F.`)

        // Incrementa el índice para pasar a la siguiente temperatura
        i++;
    }
}



// Algoritmo 3

/**
 * Función que determina el mayor de dos números.
 * Devuelve un mensaje con el resultado.
 */
function mayorDeDos(n1, n2) {

    // Determina el mayor de los dos números usando el operador ternario.
    let mayor = n1 > n2 ? n1 : n2;

    // Devuelve un mensaje indicando el número mayor.  
    return `El numero mayor entre ${n1} y ${n2} es = ${mayor}.`
}

// Ejemplos de números a comparar.
let numero1 = 56
let numero2 = 55

// Llama a la función mayorDeDos y almacena el resultado. 
let numeromayor = mayorDeDos(numero1, numero2)



// Algoritmo 4

/**
 * Función que convierte una cantidad de minutos a horas y minutos.
 * Devuelve un mensaje que indica la equivalencia en horas y minutos.
 */
function convertirMinutos(minu) {

    // Calcula la cantidad de horas completas usando Math.floor para redondear hacia abajo.
    let horas = Math.floor(minu / 60);

    // Calcula los minutos restantes después de extraer las horas completas.
    let minutosrestantes = minu - (horas * 60);

    // Devuelve un mensaje que muestra la equivalencia en horas y minutos.
    return `${minu} minutos equivalen a = ${horas} horas y ${minutosrestantes} minutos.`;
}

// Cantidad de minutos a convertir.
let minutos = 1350

// Llama a la función convertirMinutos y almacena el resultado.
let horaexacta = convertirMinutos(minutos);



// Algoritmo 5

/**
 * Función que determina si un número está dentro de un rango dado.
 * Devuelve un mensaje indicando si el número está en el rango y el resultado en formato booleano.
 */
function estaEnRango(num, inicio = 1, final = 50) {

    // Determina si el número está dentro del rango dado.
    let resultado = num >= inicio && num <= final

    // Devuelve un mensaje con el resultado.
    if (resultado) {
        return `El numero ${num} esta en el rango, entre ${inicio} y ${final}, por lo tanto es ${resultado}.`
    } else {
        return `El numero ${num} no esta en el rango, entre ${inicio} y ${final}, por lo tanto es ${resultado}.`
    }

}

// Ejemplo de número a verificar.
let num = 50

// Llama a la función estaEnRango y almacena el resultado.
let rango = estaEnRango(num)




// Algoritmo 6

/**
 * Función que calcula el precio final de un producto después de aplicar un descuento.
 * Devuelve un mensaje con el valor inicial del producto, el porcentaje de descuento y el valor final después del descuento.
 */
function calcularPrecioFinal(precioInicial, descuento) {

    // Calcula el monto del descuento.
    let montoDescuento = (precioInicial * descuento) / 100;

    // Calcula el precio final después de aplicar el descuento.
    let total = precioInicial - montoDescuento;

    // Devuelve un mensaje con el valor inicial, el porcentaje de descuento y el valor final.
    return `El valor del producto es de ${precioInicial} mil, el descuento es del ${descuento} %, por lo tanto el valor final de producto es de ${total} mil.`

}

// Ejemplo de uso de la función.
let precioInicial = 100;
let descuento = 20;

// Llama a la función y almacena el resultado.
let precioFinal = calcularPrecioFinal(precioInicial, descuento);



// Algoritmo 7

/**
 * Función que determina si una persona puede votar basado en su edad.
 * Devuelve un mensaje indicando si la persona puede votar o no.
 */
function puedeVotar(edad) {

    // Verifica si la edad es mayor o igual a 18 y retorna la respuesta.
    if (edad >= 18) {
        return `Su edad es ${edad} años, por lo tanto puede votar.`
    } else {
        return `Su edad es ${edad} años, por lo tanto no puede votar.`
    }
}

// Ejemplo de uso de la función.
edad = 28

// Llama a la función y almacena el resultado.
let votar = puedeVotar(edad)



// Algoritmo 8

/**
 * Función que calcula el área de un triángulo dado su base y altura.
 * Devuelve un mensaje que indica el área total del triángulo.
 */
function calcularAreaTriangulo(base, altura) {

    // Calcula el área del triángulo usando la fórmula: (1 / 2) * base * altura
    let areatotal = (1 / 2) * base * altura

    // Retorna un mensaje con el área calculada y las dimensiones del triángulo
    return `Respecto a la base ${base} cm y la altura ${altura} cm, el area total del triangulo es ${areatotal}.`
}

// Ejemplo de uso de la función
let base = 115
let altura = 555

// Llama a la función y almacena el resultado
let area = calcularAreaTriangulo(base, altura)



// Resultado de todos los algoritmos 


console.group("Algoritmo 1");
// Llama a la función para ejecutar el algoritmo
esBisiesto(years);
console.groupEnd();

console.group("Algoritmo 2");
// Llama a la función para ejecutar el algoritmo
celsiusAFahrenheit(celsius);
console.groupEnd();

console.group("Algoritmo 3");
// Llama a la función para ejecutar el algoritmo
console.log(numeromayor);
console.groupEnd();

console.group("Algoritmo 4");
// Llama a la función para ejecutar el algoritmo
console.log(horaexacta);
console.groupEnd();

console.group("Algoritmo 5");
// Llama a la función para ejecutar el algoritmo
console.log(rango);
console.groupEnd();

console.group("Algoritmo 6");
// Llama a la función para ejecutar el algoritmo
console.log(precioFinal);
console.groupEnd();

console.group("Algoritmo 7");
// Llama a la función para ejecutar el algoritmo
console.log(votar);
console.groupEnd();

console.group("Algoritmo 8");
// Llama a la función para ejecutar el algoritmo
console.log(area);
console.groupEnd();
