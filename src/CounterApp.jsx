//Creando el ejercicio de la app del contador

import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( 0 );
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    const handleDelete = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( 0 );
    }
    // function handleAdd(event) {
    //     console.log(event);
    // }

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter } </h2>

    <button onClick={ handleAdd }>
        +1
    </button>
    <button onClick={ handleDelete }> 
        -1 
    </button>
    <button onClick={ handleReset }> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}