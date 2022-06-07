import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ItemDetailModal from './ItemDetailModal';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';



const ItemSelectPrice = ({
            price, 
            setPriceChosen, 
            priceChosen,
            type,
            setType
        }) => {
    //const [type, setType ] = useState('Seleccione')
    const [open, setOpen] = useState(false)

    const handleModal = () => { setOpen(!open); }

    const handleChangeSelect = (e) => {
        setType(e.target.id)
        setPriceChosen(e.target.value)
    }

    return (
        <>
        { priceChosen !== '' && 

            <div style={{marginBottom:'10px', cursor: 'pointer'}} onClick={handleModal}>
                <p className='price-select-custom'>
                    ${priceChosen}
                </p>

                <div className='price-option-custom'>
                    <span style={{marginRight: '5px'}}><CreditCardIcon /></span>
                    <span>Hasta 6 cuotas sin interes</span>
                </div>
            </div>
        }
        <FormControl sx={{ m: 1, minWidth: 80 }}>
            <Select
                value={type}                
                onChange={handleChangeSelect}
                autoWidth
                label="Age"
            >
            {

                price && price.map((pr, i) => {
                    return(
                        <MenuItem key={i} value={pr.price} id={pr.type} >
                            {pr.type}
                        </MenuItem>
                    )}
                )
            
            } 
            </Select>
        </FormControl>
        { open && (
            <ItemDetailModal handleModal={handleModal} open={open}>
                <Card style={{marginBottom: '15px'}}>                        
                    <CardContent style={{display: 'block'}}>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Transferencia o Deposito <br/>
                        </Typography>
                        <Typography variant="body2">
                            Precio: {priceChosen} <br/>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{marginBottom: '15px'}}>                        
                    <CardContent style={{display: 'block'}}>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Mercado Pago <br/>
                        </Typography>
                        <Typography variant="body2">
                            6 cuotas sin Interes de {priceChosen/6} <br/>
                            3 cuotas sin Interes de {priceChosen/3}
                        </Typography>
                    </CardContent>
                </Card>
            </ItemDetailModal>
        )}

        </>
    );
};

export default ItemSelectPrice;