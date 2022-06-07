import { Container } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer-custom'>
            <Container>
                <p style={{color:'white', padding: '25px'}}>
                    Copyright 2022
                </p>
            </Container>
        </div>
    );
};

export default Footer;