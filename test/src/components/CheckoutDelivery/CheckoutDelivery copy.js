import React from 'react';
import { Divider, Grid, InputAdornment, TextField } from '@mui/material';
import '../CheckoutContainer/Checkout.css'
import CheckoutDeliverySelect from './CheckoutDeliverySelect';

const CheckoutDelivery = ({
    handleFormChange, 
    setProvince,
    cities,
    setCities}) => {
    
    return (
        <>
        <form className='checkout-form'>
            <Grid container spacing={2}>
                <Grid item xs={5} style={{display: 'grid'}}>
                    <TextField
                        name="name"
                        label="Nombre y Apellido"
                        variant="outlined"
                        onChange={handleFormChange}
                        margin="normal"
                    />
                    <TextField
                        name="mail"
                        label="Mail"
                        variant="outlined"
                        onChange={handleFormChange}
                        margin="normal"
                    />
                    <div style={{display: 'flex'}}>
                        <Grid item xs={4}>
                            <TextField
                                name="code-phone"
                                label="Codigo"
                                variant="outlined"
                                onChange={handleFormChange}
                                margin="normal"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                name="phone"
                                label="Telefono"
                                variant="outlined"
                                onChange={handleFormChange}
                                margin="normal"
                                />
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={2} style={{display: 'grid', justifyContent: 'center'}}>
                    <Divider orientation="vertical" flexItem></Divider>
                </Grid>
                <Grid item xs={5} style={{display: 'grid'}}>
                    <div style={{display: 'flex', textAlign: 'left', paddingLeft: '10px'}}>
                        <Grid item xs={8}>
                            <TextField
                                name="address"
                                label="Direccion"
                                variant="outlined"
                                onChange={handleFormChange}
                                margin="normal"
                                />
                        </Grid>
                        <Grid item xs={4} style={{paddingLeft: '0px'}}>
                            <TextField
                                name="street-number"
                                label="Numero"
                                variant="outlined"
                                onChange={handleFormChange}
                                margin="normal"
                                />
                        </Grid>
                    </div>
                    <CheckoutDeliverySelect 
                        setProvince={setProvince}
                        cities={cities}
                        setCities={setCities}
                        handleFormChange={handleFormChange}
                    />
                </Grid>
            </Grid>
        </form>
       
        </>
    );
};

export default CheckoutDelivery;