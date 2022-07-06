import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CheckoutPayModal = ({handleModalPay, openModalPay}) => {
    return (
        <>
        <Dialog maxWidth={'lg'} onClose={handleModalPay} open={openModalPay}>
            <DialogContent>
                <div style={{marginBottom: '15px'}}>
                    <h2>Mercado Pago</h2>
                    <IconButton onClick={handleModalPay}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogContent>
        </Dialog>
        </>
    );
};

export default CheckoutPayModal;