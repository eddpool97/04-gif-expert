import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category })=>{

    const { images, isLoading} = useFetchGifs( category );

    return(
        <>
            <h3>{category}</h3>

            {
                //Comentario
                isLoading && ( <h2>Cargando...</h2> ) //Evaluacion AND logica resumida
            }

            <div className='card-grid'>
                {
                    images.map( (image) =>{
                        return <GifItem 
                                    key={image.id} 
                                    {...image} //Esparcion de propiedades. Envia todas las propiedades sin importar el numero de ellas
                                />
                    })
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}