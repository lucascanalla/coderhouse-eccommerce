//add CartWidget like a functional component at the end of NavBar 
import { Badge, Button, Card, CardContent, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../context/CartContext';
import CartModal from './CartModal';

//Snippets rscp

const CartWidget = () => {
    const [open, setOpen] = useState(false);
    const { cartListItem, removeItem, clear } = useContext(CartContext)
    
    const handleModal = () => setOpen(!open)
    const handleDeleteButton = (e) => removeItem(e)
    return (
        <>
        <Button style={{backgroundColor: 'white', marginRight: '15px', paddingTop: '12px'}} onClick={handleModal}>
            <span className='span-cart'>
                <Badge color="secondary" badgeContent={cartListItem.length}>
                    <ShoppingCartIcon className='shop-cart'/>
                </Badge>
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
                { cartListItem && cartListItem.map((item, key) => {
                return(
                    <Card style={{marginBottom: '15px'}} key={key}>                        
                        <CardContent style={{display: 'flex', alignItems: 'center'}}>
                            <img src={`/${item.img}`} alt={item.img} className='img-cart'/>
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
                            <Button value={item.id} onClick={(e) => handleDeleteButton(item.id, item.type)}>
                                <DeleteIcon />
                            </Button>
                        </CardContent>
                    </Card>
                )
                }) }
            </CartModal>
        )}
        </>
    );
};

export default CartWidget;

    