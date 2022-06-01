import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd, showButton }) => {

    const [count, setCount] = useState(initial)
    //const [buttonCartLabel, setButtonCartLabel] = useState();
    //const [showButton, setShowButton] = useState(false);

    const handleRestCount = () => { setCount(count - 1) }
    const handleAddCount = () => { setCount(count + 1) }
    // const onAdd = () => { 
    //     setShowButton(true);
    //     console.log("Elementos a agregar al carrito: ", count) 
    // }

    return (
        <>
        { !showButton &&
            <>
            <Button variant='outlined' disabled={ count === initial || stock < 1 } onClick={handleRestCount}>-</Button>
                <span style={{fontWeight:'bold'}}>{count}</span>
            <Button variant='outlined'  disabled={ stock < 1 || count === stock } onClick={handleAddCount}>+</Button>
            <Button id='buttonCart' variant='contained' disabled={ stock < 1 } onClick={onAdd}>
            <span style={{color: 'white', marginBottom: '0px'}}>{ stock < 1 ? 'Sin Stock' : 'Agregar al Carrito'  }</span>
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