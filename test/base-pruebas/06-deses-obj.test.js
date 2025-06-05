import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe de retornar un objeto', () => { 

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const userTest = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const user = usContext( persona );

        expect(user).toEqual(userTest);
    });
});