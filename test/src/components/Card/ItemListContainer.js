import React from 'react';
import CardItem from './CardItem'
import {Container, Grid} from '@mui/material'
import { initialCards } from '../../data';
import './Card.css'

const ItemListContainer = () => {
    
    return (
        <>
            <Container>
                <Grid className='general-container' container>
                    { 
                        initialCards != null ?
                            initialCards.map(function(product) {
                                return(
                                    <CardItem product={product} />
                                )
                            })
                        :
                            <h5>No Hay productos</h5>
                    }
                </Grid>
            </Container>
        </>
    );
};

export default ItemListContainer;