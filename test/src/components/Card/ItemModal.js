import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

const ItemModal = ({open, handleCloseModal, children}) => {
    return (
        <>
        <Dialog maxWidth={'lg'} onClose={handleCloseModal} open={open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
        </>
    );
}

export default ItemModal;