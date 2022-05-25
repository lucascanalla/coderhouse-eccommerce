import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const ItemCount = ({ stock, initial }) => {

    const [count, setCount] = useState()
    const [buttonCartLabel, setButtonCartLabel] = useState();

    useEffect( () =>{
        if(parseInt(stock) < 1){
            setButtonCartLabel("Sin Stock")
            setCount(0)
        }else{
            setButtonCartLabel("Agregar al Carrito")
            setCount(initial)
        }
    },[])

    const handleRestCount = () => { setCount(count - 1) }
    const handleAddCount = () => { setCount(count + 1) }
    const onAdd = () => { console.log("Elementos a agregar al carrito: ", count) }

    return (
        <>
        <Button variant='outlined' disabled={ count === initial || stock < 1 } onClick={handleRestCount}>-</Button>
            {count}
        <Button variant='outlined'  disabled={ stock < 1 || count === stock } onClick={handleAddCount}>+</Button>
        <Button variant='contained' disabled={ stock < 1 } onClick={onAdd}>
            {buttonCartLabel}
        </Button>
        </>
    );
};

export default ItemCount;