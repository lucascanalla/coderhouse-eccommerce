import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial }) => {

    const [count, setCount] = useState()
    const [buttonCartLabel, setButtonCartLabel] = useState();
    const [showButton, setShowButton] = useState(false);

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
    const onAdd = () => { 
        setShowButton(true);
        console.log("Elementos a agregar al carrito: ", count) 
    }

    return (
        <>
        { !showButton &&
            <>
            <Button variant='outlined' disabled={ count === initial || stock < 1 } onClick={handleRestCount}>-</Button>
                <span style={{fontWeight:'bold'}}>{count}</span>
            <Button variant='outlined'  disabled={ stock < 1 || count === stock } onClick={handleAddCount}>+</Button>
            <Button id='buttonCart' variant='contained' disabled={ stock < 1 } onClick={onAdd}>
                {buttonCartLabel}
            </Button>
            </>
        }
        { showButton && 
            <Button variant='outlined' >
                {/* <Link to={'/cart'}> */}
                    Terminar mi compra
                {/* </Link> */}
            </Button>
        }
        </>
    );
};

export default ItemCount;