import React, { useEffect } from 'react';
import CardItem from './CardItem';
import { Grid } from '@mui/material';
import { initialCards } from '../../data';
import './Card.css';

const ItemListContainer = () => {
    

    const getProducts = () => {
        return new Promise((resolve, reject) => {
                resolve(initialCards);
        })
    }

    useEffect( ()=> {
        getProducts()
        .then( (res) => {
            console.log("Response",res)
        })
        .catch( (err) => {
            console.log("Error",err)
        })
        .finally( () => {
        } )
    
    },[])

    return (
        <>
            <Grid container>
                { 
                    initialCards != null ?
                        initialCards.map(({img, title, price, id, stock}) => {
                            return(
                                <>
                                    <Grid item md={3} key={id}>
                                        <div className='card-item-gral'>
                                            <CardItem title={title} price={price} img={img} stock={stock} />
                                        </div>
                                    </Grid>                                
                                </>
                            )
                        })
                    :
                        <h5>No Hay productos</h5>
                }
            </Grid>
        </>
    );
};

export default ItemListContainer;