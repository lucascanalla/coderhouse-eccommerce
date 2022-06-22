import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CheckoutSteps from './CheckoutSteps';
import './Checkout.css';

const CheckoutContainer = () => {
    return(
        <div className='checkout-container-custom'>
            <Container>
                <CheckoutSteps />
            </Container>
        </div>
    );

};

export default CheckoutContainer;