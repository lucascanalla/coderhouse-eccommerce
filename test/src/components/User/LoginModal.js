import React from 'react';
import { DialogContent, IconButton, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LoginModal = ({handleModal, open, children}) => {
    return (
        <>
        <Dialog maxWidth={'lg'} onClose={handleModal} open={open}>
            <DialogContent>
                <div className='modal-cart-div'>
                    <div style={{marginBottom: '15px'}}>
                        <h2>Login</h2>
                        <IconButton onClick={handleModal}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
        </>
    );
};

export default LoginModal;