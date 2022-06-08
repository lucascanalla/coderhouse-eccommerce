//add CartWidget like a functional component at the end of NavBar 
import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CartContext from '../../context/CartContext';
import CartModal from './CartModal';
import DeleteIcon from '@mui/icons-material/Delete';

//Snippets rscp

const CartWidget = () => {
    const [open, setOpen] = useState(false);
    const { cartListItem, removeItem, clear } = useContext(CartContext)
    
    const handleModal = () => setOpen(!open)
    const handleDeleteButton = (e) => removeItem(e)

    return (
        <>
        <Button style={{backgroundColor: 'white', marginRight: '15px'}} onClick={handleModal}>
            <span className='span-cart'>
                <ShoppingCartIcon className='shop-cart'/>
                <Brightness1Icon className='quantity-cart'/>
            </span>
        </Button>
        
        {
        open && (
            <CartModal 
                handleModal={handleModal} 
                open={open} 
                clear={clear} 
                cartListItem={cartListItem.length}  
            >
                { cartListItem && cartListItem.map((item) => {
                return(
                    <>
                    <Card style={{marginBottom: '15px'}} key={item.id}>                        
                        <CardContent style={{display: 'flex', alignItems: 'center'}}>
                            <img src={`/${item.img}`} alt="photo" className='img-cart'/>
                            <Typography sx={{ fontSize: 18 }} style={{marginRight:'10px', marginBottom:'0px'}} color="text.secondary" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography style={{marginRight:'10px'}}variant="body1">
                                {item.type}
                            </Typography>
                            <Typography style={{marginRight:'10px'}} variant="body3">
                                $ {item.price}
                            </Typography>
                            <Typography style={{marginRight:'15px'}}variant="body3">
                                {item.quantity}
                            </Typography>
                            <Button value={item.id} onClick={(e) => handleDeleteButton(item.id)}>
                                <DeleteIcon />
                            </Button>
                        </CardContent>
                    </Card>
                    </>
                )
                }) }
            </CartModal>
        )}
        </>
    );
};

export default CartWidget;

    