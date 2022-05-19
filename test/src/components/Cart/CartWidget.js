//add CartWidget like a functional component at the end of NavBar 
import { Button } from '@mui/material';
import React, { useState } from 'react';
import CartModal from './CartModal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Snippets rscp

const CartWidget = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button style={{backgroundColor: 'white', marginRight: '15px'}} onClick={handleOpen}>
                <ShoppingCartIcon />
                <CartModal handleClose={handleClose} open={open}  />
            </Button>
        </>
    );
};

export default CartWidget;

    