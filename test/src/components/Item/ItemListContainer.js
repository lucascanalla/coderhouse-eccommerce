import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getProductsFirebase } from '../../selectors/items';
import ItemList from './ItemList';
import './Card.css';


const ItemListContainer = () => {
    
    const [itemArray, setItemArray] = useState();
    const [header, setHeader] = useState();
    const { categoryName } = useParams();
    const navigate = useNavigate()

    useEffect( ()=> {
       
        const productToShow = getProductsFirebase(categoryName);
        productToShow
        .then( (res) => {
            setItemArray(res);
        })
        .catch( (err) => {
            console.log("Error: ", err);
            navigate('/notfoundproduct');
        })
        
        setHeader(categoryName ? categoryName.toUpperCase() : "" )
 
    },[categoryName, navigate])

    return (
        <div className='general-container'>
            <img src='/AliwenH1Secundary.png' alt='aliwen' className='img-item-container'/>
            <h1 className="title">{header}</h1>
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