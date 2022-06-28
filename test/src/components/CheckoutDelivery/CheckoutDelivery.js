import React, { useEffect, useState } from 'react';
import { Divider, Grid, InputAdornment, TextField } from '@mui/material';
import '../CheckoutContainer/Checkout.css'
import CheckoutDeliverySelect from './CheckoutDeliverySelect';
import validator from '../CheckoutContainer/CheckoutFormValidator';

const CheckoutDelivery = ({
    handleFormChange, 
    setProvince,
    cities,
    setCities,
    setIsValid
    }) => {
        
    const [errors, setErrors] = useState({
        // name:'',
        // mail:'',
        // phone:'',
        // code_phone:'',
        // address:'',
        // address_number:'',
        // city:'',
        // province:''
    });
    
    useEffect(() => {
        const isValidErrors = () => 
            Object.values(errors).filter(error => typeof error !== "undefined")
            .length > 0;

        !isValidErrors() ? setIsValid(true) : setIsValid(false) 
    }, [errors])

    useEffect(() => {
        setIsValid(false) 
    }, [])

    const handleValidateForm = (e) => {
        const {value, name} = e.target;
        let result = validator(value, name);
        setErrors(() => ({
            ...errors, [e.target.name]: Object.values(result)[0]
        }))
    }
    
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
                        onBlur={handleValidateForm}
                        error={errors.name ? true : false}
                        helperText={errors.name}
                    />
                    <TextField
                        name="mail"
                        label="Mail"
                        variant="outlined"
                        margin="normal"
                        onChange={handleFormChange}
                        onBlur={handleValidateForm}
                        error={errors.mail ? true : false}
                        helperText={errors.mail}
                    />

                    <div style={{display: 'flex'}}>
                        <Grid item xs={4}>
                            <TextField
                                name="code_phone"
                                label="Codigo"
                                variant="outlined"
                                margin="normal"
                                onChange={handleFormChange}
                                onBlur={handleValidateForm}
                                error={errors.code_phone ? true : false}
                                helperText={errors.code_phone}
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
                                onBlur={handleValidateForm}
                                onChange={handleFormChange}
                                error={errors.phone ? true : false}
                                helperText={errors.phone}
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
                                onBlur={handleValidateForm}
                                onChange={handleFormChange}
                                error={errors.address ? true : false}
                                helperText={errors.address}
                                />
                        </Grid>
                        <Grid item xs={4} style={{paddingLeft: '0px'}}>
                            <TextField
                                name="address_number"
                                label="Numero"
                                variant="outlined"
                                margin="normal"
                                onBlur={handleValidateForm}
                                onChange={handleFormChange}
                                error={errors.address_number ? true : false}
                                helperText={errors.address_number}
                                />
                        </Grid>
                    </div>
                    <CheckoutDeliverySelect 
                        setProvince={setProvince}
                        cities={cities}
                        setCities={setCities}
                        handleFormChange={handleFormChange}
                        handleValidateForm={handleValidateForm}
                        errors={errors}
                    />
                </Grid>
            </Grid>
        </form>
       
        </>
    );
};

export default CheckoutDelivery;