//add CartWidget like a functional component at the end of NavBar 
import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
//import CartModal from './CartModal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CartContext from '../../context/CartContext';
import CartModal2 from './CartModal2';


//Snippets rscp

const CartWidget = () => {
    const [open, setOpen] = useState(false);
    //const handleOpen = () => setOpen(true);
    //const handleClose = () => setOpen(false);
    const handleModal = () => setOpen(!open)
    const { cartListItem } = useContext(CartContext)
    console.log(cartListItem)

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
                <CartModal2 handleModal={handleModal} open={open} >
                    { cartListItem && cartListItem.map((item) => {
                    return(
                        <>
                        <Card style={{marginBottom: '15px'}} key={item.id}>                        
                            <CardContent style={{display: 'flex'}}>
                                <Typography sx={{ fontSize: 18 }} style={{marginRight:'10px'}} color="text.secondary" gutterBottom>
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
                            </CardContent>
                        </Card>
                        </>
                    )
                    })
                    }

                </CartModal2>
            )
            }
            {/* <CartModal  handleClose={handleClose} open={open} cartListItem={cartListItem}  /> */}
        </>
    );
};

export default CartWidget;

    