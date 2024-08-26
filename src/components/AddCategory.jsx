import { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory})=>{

    const [inputValue, setInpuValue] = useState('');

    const onInputChange = ({target})=>{
        let inputValue = target.value;
        setInpuValue ( inputValue );
    }

    const handleSubmit = ( event )=>{
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        
        onNewCategory( inputValue.trim() );

        setInpuValue('');
    }

    return(
        //Atributo aria-label para testing
        <form onSubmit={ handleSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Search Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}