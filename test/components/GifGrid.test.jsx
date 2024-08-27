import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid  category={ category }/>);

        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });

    test('Debe de mostrar el loading inicialmente', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'saitama.gif.com'
            },
            {
                id: '1230',
                title: 'Goku',
                url: 'goku.gif.com'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid  category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe(2);
        
    });

});