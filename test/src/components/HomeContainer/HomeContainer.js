import { Container } from '@mui/material';
import React from 'react';
import HomeCarrousel from './HomeCarrousel';

const HomeContainer = () => {
    return (
        <Container style={{marginTop: '20px'}}>
            <HomeCarrousel />
        </Container>
    );
};

export default HomeContainer;