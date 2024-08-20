
import { getGifs } from "../../src/helpers/getGifs";

describe('Testing getGifs()', () => {

    test('Should return an Array of Gifs', async() => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs )
    });

});