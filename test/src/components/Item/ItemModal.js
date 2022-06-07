import React from 'react';
import { Dialog, DialogContent } from '@mui/material';


const ItemModal = ({open, handleModal, children}) => {
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

export default ItemModal;