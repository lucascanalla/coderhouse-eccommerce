import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

const CheckoutModal = ({open, handleModal, children}) => {
    return (
        <>
        <Dialog maxWidth={'lg'} onClose={handleModal} open={open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
        </>
    );
}

export default CheckoutModal;