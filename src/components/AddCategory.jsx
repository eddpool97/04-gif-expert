import { useState } from 'react';

export const AddCategory = ({handleAddCategory})=>{

    const [inputValue, setInpuValue] = useState();

    const onInputChange = ({target})=>{
        let inputValue = target.value;
        setInpuValue ( inputValue )
    }

    const handleSubmit = ( event )=>{
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        handleAddCategory( categories => [inputValue, ...categories]);

        setInpuValue('');
    }

    return(
        <form onSubmit={ handleSubmit}>
            <input 
                type="text"
                placeholder="Search Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}