//EJERCICIOS JS:


//For anidado:
/**Un for anidado es simplemente un bucle dentro de otro. El externo se ejecuta primero, y por cada vuelta del externo, el interno se ejecuta completo. */

{
    for (let fila = 1; fila <= 3; fila++) {
        for (let columna = 1; columna <= 4; columna++) {
            console.log(`Fila ${fila}, Columna ${columna}`);
        }
    }

}
/**
 * ¿Qué pasa aquí?
El bucle externo (fila) se repite 3 veces.
Por cada fila, el bucle interno (columna) se repite 4 veces.
Resultado: se imprimen 12 combinaciones (3 filas × 4 columnas).
 */

/**Fila 1, Columna 1
Fila 1, Columna 2
Fila 1, Columna 3
Fila 1, Columna 4
Fila 2, Columna 1
Fila 2, Columna 2
Fila 2, Columna 3
Fila 2, Columna 4
Fila 3, Columna 1
Fila 3, Columna 2
Fila 3, Columna 3
Fila 3, Columna 4
 */

/*TypeScript:
{
    function imprimirFilasColumnas(): void {
        for (let fila: number = 1; fila <= 3; fila++) {
            for (let columna: number = 1; columna <= 4; columna++) {
                console.log(`Fila ${fila}, Columna ${columna}`);
            }
        }
    }

    imprimirFilasColumnas();

}
    */

/*JAVA:
{
    public class Tabla {
        public static void main(String[] args) {
            for (int fila = 1; fila <= 3; fila++) {
                for (int columna = 1; columna <= 4; columna++) {
                    System.out.println("Fila " + fila + ", Columna " + columna);
                }
            }
        }
    }

}
    */

/*C#
{
    using System;

    class Tabla {
        static void Main() {
            for (int fila = 1; fila <= 3; fila++)
            {
                for (int columna = 1; columna <= 4; columna++)
                {
                    Console.WriteLine($"Fila {fila}, Columna {columna}");
                }
            }
        }
    }

}
    */
//--------------------------------------------------------

//Matriz:
{
    let matriz = [];

    for (let fila = 0; fila < 3; fila++) {
        matriz[fila] = [];
        for (let columna = 0; columna < 4; columna++) {
            matriz[fila][columna] = fila + columna; // o cualquier lógica
        }
    }

    console.log(matriz);


}
//Esto te da una matriz de 3x4 con valores calculados dinámicamente.
//--------------------------------------------------------

const objeto1 = {
    nombre: diego,
    edad: x
};
{
    for (i = 1; i < 10; i++) {
        console.log(i);
    }
}
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

{
    {
        function factorial(n) {                     
            if (n === 0 || n === 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }
        console.log(factorial(4));
    }


    {
        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1; // Caso base
            } else {
                return n * factorial(n - 1); // Llamada recursiva
            }
        }

    }
}
//--------------------------------------------------------
//Ejemplo callback: (Una función recursiva se llama a sí misma para resolver un problema en partes más pequeñas. En el caso del factorial, la función se repite hasta llegar a un caso base.)
{
    function factorial(n, callback) {
        function recursivo(x) {
            if (x === 0 || x === 1) {
                return 1;
            } else {
                return x * recursivo(x - 1);
            }
        }

        const resultado = recursivo(n);
        callback(resultado); // Aquí usamos la callback
    }
    factorial(5, function (resultado) {
        console.log("El factorial es: " + resultado);
    });

}

{
    function saludar(nombre, callback) {
        console.log("Hola " + nombre);
        callback();
    }

    function despedida() {
        console.log("¡Hasta luego!");
    }

    saludar("Diego", despedida);

}