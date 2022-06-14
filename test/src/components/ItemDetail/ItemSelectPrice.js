import React, { useState } from 'react';
import { Select, MenuItem, FormControl, Typography, Card, CardContent } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ItemDetailModal from './ItemDetailModal';

const ItemSelectPrice = ({
            priceArray, 
            setPriceChosen, 
            priceChosen,
            setType
        }) => {
            
    const [open, setOpen] = useState(false)
    
    const handleModal = () => { setOpen(!open); }
    const handleChangeSelect = (e) => setPriceChosen(e.target.value)
    const handleChangeMenuItem = (e) => setType(e.target.getAttribute("data-type"))

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
                value={priceChosen}
                onChange={handleChangeSelect}
                autoWidth
                displayEmpty
                style={{fontFamily: 'DINNextRoundedLTPro'}}
            >
                <MenuItem disabled value="">
                    <em style={{color:'grey'}}>Seleccione</em>
                </MenuItem>
            {
            priceArray && priceArray.map((price, i) => {
                return(
                    <MenuItem 
                        key={i} 
                        value={price.price}
                        data-type={price.type}
                        onClick={handleChangeMenuItem}
                        className="select-item-custom"
                    >
                        {price.type}
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
                            10% de Descuento! <br/>
                        </Typography>
                        <Typography variant="body2">
                            Precio: {priceChosen * 0.9} <br/>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{marginBottom: '15px'}}>                        
                    <CardContent style={{display: 'block'}}>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Mercado Pago <br/>
                        </Typography>
                        <Typography variant="body2">
                            6 cuotas sin Interes de {Math.round(priceChosen/6, 2)} <br/>
                            3 cuotas sin Interes de {Math.round(priceChosen/3, 2)}
                        </Typography>
                    </CardContent>
                </Card>
            </ItemDetailModal>
        )}

        </>
    );
};

export default ItemSelectPrice;