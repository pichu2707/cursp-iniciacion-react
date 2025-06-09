import { retornaArreglo, usState } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en el archivo 07-deses-arr.js', () => {
    test('retornaArreglo debe retornar un arreglo con un string y un número', () => {

        const [letras, numeros] = retornaArreglo();
        console.log(letras, numeros);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
    });

    test('usState debe retornar un arreglo con un valor y una función', ()=> {
        const name = 'Goku'
        const [nombre, setNombre] = usState( name );
        console.log(nombre);

        expect(nombre).toBe(name);
        expect(typeof setNombre).toBe('function');
    });
});