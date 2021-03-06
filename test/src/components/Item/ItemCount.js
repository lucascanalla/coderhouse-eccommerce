import React, { useState } from 'react';
import { Alert, Button, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd, showButton, count, setCount }) => {

    const [open, setOpen] = useState(false);
    const handleRestCount = () => { setCount(count - 1) }
    const handleAddCount = () => { setCount(count + 1) }
    const handleSnack = () => { setOpen(!open)}
    const handleOnAdd = () => { 
        onAdd()
        handleSnack();
    }

    return (
        <>
        { !showButton &&
            <>
            <div>
                <Button variant='outlined' disabled={ count === initial || stock < 1 } onClick={handleRestCount}>-</Button>
                    <span style={{fontWeight:'bold'}}>{count}</span>
                <Button variant='outlined'  disabled={ stock < 1 || count === stock } onClick={handleAddCount}>+</Button>
                <Button id='buttonCart' variant='contained' disabled={ stock < 1 } onClick={handleOnAdd}>
                    <span style={{color: 'white', marginBottom: '0px'}}>{ stock < 1 ? 'Sin Stock' : 'Agregar al Carrito'  }</span>
                </Button>
            </div>
            </>
        }
        { showButton && 
            <Button variant='outlined' >
                <Link to={'/cart'}>
                    Comprar
                </Link>
            </Button>
        }
        {open && 
            <div style={{color: 'white', backgroundColor: 'brown'}}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnack} >
                    <Alert onClose={handleSnack} severity="success" sx={{ width: '100%' }}>
                        El Producto ha sido agregado al carrito!
                    </Alert>
                </Snackbar>
            </div>
        }
        </>
    );
};

export default ItemCount;