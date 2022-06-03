//add CartWidget like a functional component at the end of NavBar 
import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import CartModal from './CartModal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CartContext from '../../context/CartContext';


//Snippets rscp

const CartWidget = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { cartListItem } = useContext(CartContext)
    console.log(cartListItem)

    return (
        <>
            <Button style={{backgroundColor: 'white', marginRight: '15px'}} onClick={handleOpen}>
                <span className='span-cart'>
                    <ShoppingCartIcon className='shop-cart'/>
                    <Brightness1Icon className='quantity-cart'/>
                </span>
            </Button>
            <CartModal  handleClose={handleClose} open={open} cartListItem={cartListItem}  />
        </>
    );
};

export default CartWidget;

    