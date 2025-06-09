import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes.js";


describe('Pruebas en el archivo 08-imp-exp.js', () => {
    test('Pruebas en 08-imp-exp.js', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        console.log(heroes);
        
        expect( hero ).toBeFalsy();
    });
});

//Tarea
// Debe de retonar un arreglo con los heroes de DC
// Length === 3
// toEqual al arreglo filtrado


describe('Pruebas en el archivo 08-imp-exp.js', () => {
    test(' getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const allHeroesOwners = getHeroesByOwner(owner);
        
        expect(allHeroesOwners).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(allHeroesOwners.length).toBe(3);
        expect(allHeroesOwners).toEqual(heroes.filter((heroe) => heroe.owner === owner));

        // Cuarta validación de longitud máxima
        expect(allHeroesOwners).toHaveLength(3);
        expect(allHeroesOwners.length).toBe(3);
    });
});