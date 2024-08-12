import { useState } from 'react';


export const GifExpertApp = ()=>{
    
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ()=>{
        setCategories(['Nueva Categoria', ...categories]);
    }
    
    return(
        <>
            {/*Titulo*/}

            <h1>GifExpertApp</h1>
            
            {/*Input*/}

            {/*Listado de Gif*/}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map( category =>{
                        return <li key={category} >{ category }</li>
                    })
                }
            </ol>

            {/*Gif Item*/}
        </>
    )
}