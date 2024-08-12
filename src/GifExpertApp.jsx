import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


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
            <AddCategory handleAddCategory={setCategories} />

            {/*Listado de Gif*/}
        
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