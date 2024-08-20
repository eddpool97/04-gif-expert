import { render, screen } from '@testing-library/react';

import {GifItem} from '../../src/components';


describe('Testing <GifItem /> Component', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Should match with snapshots', () => {

        
        const {container} = render( <GifItem title={title} url={url}/> );
        expect( container ).toMatchSnapshot();

    });

    test('Should show the image, URL and ALT correctly', () => {
        render( <GifItem title={title} url={url}/> );
        
        //Mostrar componente en la consola del testing
        //screen.debug();

        //expect( screen.getByRole('img').src ).toBe(url);

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });


    test('Mus show the Title in the component', () => {

        render( <GifItem title={title} url={url}/> );
        
        //Verificar si el titulo del componente existe
        expect( screen.getByText( title ) ).toBeTruthy();
    });
});


