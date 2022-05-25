import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { initialCards } from '../../data';
import ItemList from './ItemList';
import './Card.css';

const ItemListContainer = () => {
    
    const [itemArray, setItemArray] = useState(); 

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            let flag = true;

            if(flag){
                setTimeout( () => {
                    resolve(initialCards);
                }, 2000);
            }else{
                reject('Runtime Error')
            }
        })
    }

    useEffect( ()=> {
        getProducts()
        .then( (res) => {
            setItemArray(res);
        })
        .catch( (err) => {
            console.log("Error: ",err)
        })
        .finally( () => {
            console.log("End of ejecution")
        } )
    
    },[])

    return (
        <>
            <Grid container>
                { 
                    itemArray != null ?
                        itemArray.map(({img, title, price, id, stock, niu}, i) => {
                            return(
                                <ItemList key={i} niu={niu} title={title} price={price} img={img} stock={stock} />
                            )
                        })
                    :
                        <h3>Espere...</h3>
                }
            </Grid>
        </>
    );
};

export default ItemListContainer;