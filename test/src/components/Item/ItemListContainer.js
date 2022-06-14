import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getProducts, getProductsWithCategory } from '../../selectors';
import ItemList from './ItemList';
import './Card.css';

const ItemListContainer = () => {
    
    const [itemArray, setItemArray] = useState();
    const [header, setHeader] = useState();
    const { categoryName } = useParams();
    const navigate = useNavigate()

    // useEffect( ()=> {

    //     console.log(categoryName)
    //     getProducts()
    //     .then( (res) => {
    //         setItemArray(categoryName ? 
    //                        res.filter(item => item.category === categoryName) 
    //                     :  
    //                         res
    //                     );
    //     })
    //     .catch( (err) => {
    //         console.log("Error: ",err)
    //         navigate('/notfoundproduct')
    //     })

    //     setHeader(categoryName ? categoryName.toUpperCase() : "Aliwen" )
 
    // },[categoryName, navigate])

    useEffect( ()=> {
        if(categoryName){
            var productToShow = getProductsWithCategory(categoryName)
        }else{
            var productToShow = getProducts()
        }

        productToShow
        .then( (res) => {
            setItemArray(res);
            setHeader(categoryName ? categoryName.toUpperCase() : '' )
        })
        .catch( (err) => {
            console.log("Error: ",err)
            navigate('/notfoundproduct')
        })

    },[categoryName])

    return (
        <div className='general-container'>
            <img src='/AliwenH1Secundary.png' className='img-item-container'/>
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