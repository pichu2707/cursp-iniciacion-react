
describe('** Pruebas de cadenas**', () => {
    test('Esta prueba no debería fallar', () => {

        //1. Iniciación
        const message1 = 'Hola Mundo';

        //2. Estímulo
        const message2 = message1.trim();

        //3. Observación
        expect( message1 ).toBe( message2 );

    });
});