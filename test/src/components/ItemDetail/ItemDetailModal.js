import { Dialog, DialogContent, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';


const ItemDetailModal = ({open, handleModal, children}) => {
    return (
        <>
        <Dialog maxWidth={'lg'} onClose={handleModal} open={open}>
            <DialogContent>
                <div className='modal-div'>
                    <div style={{marginBottom: '15px'}}>
                        <h3>Opciones de Financiacion</h3>
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

export default ItemDetailModal;