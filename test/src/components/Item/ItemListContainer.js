import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getProducts, getProductsWithCategory } from '../../selectors';
import ItemList from './ItemList';
import './Card.css';

const ItemListContainer = () => {
    
    const [itemArray, setItemArray] = useState();
    const { categoryName } = useParams();
    const navigate = useNavigate()

    useEffect( ()=> {
        if(categoryName){
            var productToShow = getProductsWithCategory(categoryName)
        }else{
            var productToShow = getProducts()
        }

        productToShow
        .then( (res) => {
            console.log(res)
            setItemArray(res);
        })
        .catch( (err) => {
            console.log("Error: ",err)
            navigate('/notfoundproduct')
        })

    },[categoryName])

    return (
        <div className='general-container'>
            <h1 className="title">Ecommerce</h1>
            <Grid container>
                { 
                itemArray != null ?
                    itemArray.map((items, i) => {
                        return(
                            <ItemList key={i} item={items} />
                        )
                    })
                :
                    <h3>Espere...</h3>
                }
            </Grid>
        </div>
    );
};

export default ItemListContainer;