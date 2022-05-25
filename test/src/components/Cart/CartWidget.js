//add CartWidget like a functional component at the end of NavBar 
import { Button } from '@mui/material';
import React, { useState } from 'react';
import CartModal from './CartModal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Brightness1Icon from '@mui/icons-material/Brightness1';


//Snippets rscp

const CartWidget = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button style={{backgroundColor: 'white', marginRight: '15px'}} onClick={handleOpen}>
                <span className='span-cart'>
                    <ShoppingCartIcon className='shop-cart'/>
                    <Brightness1Icon className='quantity-cart'/>
                </span>
            </Button>
            <CartModal handleClose={handleClose} open={open}  />
        </>
    );
};

export default CartWidget;

    