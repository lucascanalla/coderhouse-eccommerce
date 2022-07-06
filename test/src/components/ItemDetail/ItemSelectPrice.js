import React, { useState } from 'react';
import { Select, MenuItem, FormControl, Typography, Card, CardContent } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ItemDetailModal from './ItemDetailModal';

const ItemSelectPrice = ({
            priceArray, 
            setType,
            type
        }) => {
            
    const [open, setOpen] = useState(false)
    
    const handleModal = () => { setOpen(!open); }
    const handleChangeMenuItem = (e) => {
        setType({
            'type': e.target.getAttribute("data-type"),
            'price': e.target.getAttribute("data-price"),
        })
    } 

    return (
        <>
        { type.price !== '' && 

            <div style={{marginBottom:'10px', cursor: 'pointer'}} onClick={handleModal}>
                <p className='price-select-custom'>
                    ${type.price}
                </p>

                <div className='price-option-custom'>
                    <span style={{marginRight: '5px'}}><CreditCardIcon /></span>
                    <span>Hasta 6 cuotas sin interes</span>
                </div>
            </div>
        }
        <FormControl sx={{ m: 1, minWidth: 80 }}>
            <Select
                value={type.price}
                autoWidth
                displayEmpty
                style={{fontFamily: 'DINNextRoundedLTPro'}}
            >
                <MenuItem disabled value="">
                    <em style={{color:'grey'}}>Seleccione</em>
                </MenuItem>
            {
            priceArray && priceArray.map((data, i) => {
                return(
                    <MenuItem 
                        key={i} 
                        value={data.price}
                        data-type={data.type}
                        data-price={data.price}
                        onClick={handleChangeMenuItem}
                        className="select-item-custom"
                    >
                        {data.type}
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
                            Precio: ${type.price * 0.9} <br/>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={{marginBottom: '15px'}}>                        
                    <CardContent style={{display: 'block'}}>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Mercado Pago <br/>
                        </Typography>
                        <Typography variant="body2">
                            6 cuotas sin Interes de ${Math.round(type.price/6, 2)} <br/>
                            3 cuotas sin Interes de ${Math.round(type.price/3, 2)}
                        </Typography>
                    </CardContent>
                </Card>
            </ItemDetailModal>
        )}

        </>
    );
};

export default ItemSelectPrice;