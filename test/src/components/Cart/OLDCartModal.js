import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Card, CardContent} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CartModal = ({handleClose, open, cartListItem}) => {
    //console.log("cartListItem desde modal", cartListItem)
    
    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {/* <Card style={{marginBottom: '15px'}}>                        
                <CardContent style={{display: 'block'}}>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        Transferencia o Deposito <br/>
                    </Typography>
                    <Typography variant="body2">
                        Precio:  <br/>
                    </Typography>
                </CardContent>
            </Card> */}
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Carrito
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Productos
                    { cartListItem && cartListItem.map((item) => {
                        return(
                        
                        <ul key={item.id}>
                            <li>{item.id} {item.title}</li> 
                        </ul>
                        )
                    })
                    }
                </Typography>
            </Box>
        </Modal>
        </>
    );
}

export default CartModal