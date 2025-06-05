import { retornaArreglo, usState } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
    test('retornaArreglo debe de retornar un string y un número', () => { 

        const [ letras, numeros ] = retornaArreglo(); 

        expect(letras).toBe( 'ABC' );
        expect(typeof letras).toBe( 'string' );

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe( 'number' );
    });

    // Tarea
    // 1. el primer valor del arr se llamará nombre
    // 2. se llamará setNombre
    test('usState debe de retornar un string y una función', () => { 

        const [ nombre, setNombre ] = usState( 'Goku' );

        expect(nombre).toBe('Goku');
        expect(typeof nombre).toBe( 'string' );

        expect(typeof setNombre).toBe( 'function' );
    });
});