import React, { useEffect } from 'react';
import { Divider, Grid, InputAdornment, TextField } from '@mui/material';
import '../Checkout.css'
import CheckoutDeliverySelect from './CheckoutDeliverySelect';

const CheckoutDelivery = ({
    handleFormChange,
    formValues,
    setProvince,
    cities,
    setCities,
    setIsValid,
    errors
    }) => {
        
    useEffect(() => {
        !isValidErrors() ? setIsValid(true) : setIsValid(false) 
    }, [errors])

    useEffect(() => {
        !isValidErrors() ? setIsValid(true) : setIsValid(false) 
    }, [])

    const isValidErrors = () => Object.values(errors).filter(error => typeof error !== "undefined").length > 0;
    
    return (
        <>
        <form className='checkout-form'>
            <Grid container spacing={2}>
                <Grid item xs={5} style={{display: 'grid'}}>
                    <TextField
                        name="name"
                        label="Nombre y Apellido"
                        variant="outlined"
                        margin="normal"
                        onChange={handleFormChange}
                        error={errors.name ? true : false}
                        helperText={errors.name}
                        value={formValues.name}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        onChange={handleFormChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                        value={formValues.email}
                    />
                    <TextField
                        name="repeat_email"
                        label="Repetir Email"
                        variant="outlined"
                        margin="normal"
                        onChange={handleFormChange}
                        error={errors.repeat_email ? true : false}
                        helperText={errors.repeat_email}
                    />

                    <div style={{display: 'flex'}}>
                        <Grid item xs={4}>
                            <TextField
                                name="code_phone"
                                label="Codigo"
                                variant="outlined"
                                margin="normal"
                                onChange={handleFormChange}
                                error={errors.code_phone ? true : false}
                                helperText={errors.code_phone}
                                value={formValues.code_phone}
                                inputProps={{ maxLength: 2 }}
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
                                margin="normal"
                                onChange={handleFormChange}
                                error={errors.phone ? true : false}
                                helperText={errors.phone}
                                value={formValues.phone}
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
                                margin="normal"
                                onChange={handleFormChange}
                                error={errors.address ? true : false}
                                helperText={errors.address}
                                value={formValues.address}
                                />
                        </Grid>
                        <Grid item xs={4} style={{paddingLeft: '0px'}}>
                            <TextField
                                name="address_number"
                                label="Numero"
                                variant="outlined"
                                margin="normal"
                                onChange={handleFormChange}
                                error={errors.address_number ? true : false}
                                helperText={errors.address_number}
                                value={formValues.address_number}
                                />
                        </Grid>
                    </div>
                    <div style={{display: 'flex', textAlign: 'left', paddingLeft: '10px'}}>
                        <Grid item xs={4}>
                            <TextField
                                name="floor"
                                label="Piso"
                                variant="outlined"
                                margin="normal"
                                onChange={handleFormChange}
                                value={formValues.floor}
                            />
                        </Grid>
                        <Grid item xs={4} style={{paddingLeft: '0px'}}>
                            <TextField
                                name="apartment"
                                label="Depto"
                                variant="outlined"
                                margin="normal"
                                onChange={handleFormChange}
                                value={formValues.apartment}
                            />
                        </Grid>
                        <Grid item xs={4} style={{paddingLeft: '0px'}}>
                        <TextField
                                name="zip_code"
                                label="CP"
                                variant="outlined"
                                margin="normal"
                                onChange={handleFormChange}
                                error={errors.zip_code ? true : false}
                                helperText={errors.zip_code}
                                value={formValues.zip_code}
                            />
                        </Grid>
                    </div>
                    
                    <CheckoutDeliverySelect 
                        setProvince={setProvince}
                        cities={cities}
                        setCities={setCities}
                        handleFormChange={handleFormChange}
                        errors={errors}
                        formValues={formValues}
                    />
                </Grid>
            </Grid>
        </form>
       
        </>
    );
};

export default CheckoutDelivery;