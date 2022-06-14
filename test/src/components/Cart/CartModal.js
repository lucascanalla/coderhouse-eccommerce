import React from 'react';
import { Link } from 'react-router-dom';
import { DialogContent, IconButton, Dialog, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CartModal = ({handleModal, open, cartListItem, clear, children}) => {
    return (
        <>
        <Dialog maxWidth={'lg'} onClose={handleModal} open={open}>
            <DialogContent>
                <div className='modal-cart-div'>
                    <div style={{marginBottom: '15px'}}>
                        <h2>CARRITO</h2>
                        <IconButton onClick={handleModal}>
                            <CloseIcon />
                        </IconButton>
                    </div>

                    {children}

                    {
                        cartListItem > 0 ?
                            <div className='cart-modal-div-buttons'>
                            <Button variant='contained' >
                                <Link to={'/cart'} onClick={handleModal} >
                                    Comprar
                                </Link>
                            </Button>
                            <Button variant='outlined' onClick={clear}>
                                Vaciar Carrito
                            </Button>
                            </div>
                        :
                            <>
                            <h4>No hay productos en el Carrito</h4>
                            <div style={{justifyContent: 'center'}}>
                                <Button variant='outlined'>
                                    <Link to={'/'} onClick={handleModal} >
                                        Comprar algo!
                                    </Link>
                                </Button>
                            </div>
                            </>
                    }

                </div>
            </DialogContent>
        </Dialog>
        </>
    );
};

export default CartModal;