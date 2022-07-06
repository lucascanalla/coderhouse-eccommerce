import React from 'react';
import { Container } from '@mui/material';
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