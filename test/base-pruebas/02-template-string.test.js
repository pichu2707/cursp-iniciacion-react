import { getSaludo} from '../../src/base-pruebas/02-template-string';


describe('Prueba 02-template-string', () => { 
    test('getSaludo debe de retornar Hola Fernando', () => { 

        const name = 'Fernando';
        const saludo = getSaludo( name );

        expect(saludo).toBe(`Hola ${ name }!!!!`);
    });
 })