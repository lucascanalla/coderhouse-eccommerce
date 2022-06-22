import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { getProducts, getProductsWithCategory, getProductsFirebase } from '../../selectors';
import ItemList from './ItemList';
import './Card.css';

import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../utils/firebase';

const ItemListContainer = () => {
    
    const [itemArray, setItemArray] = useState();
    const [header, setHeader] = useState();
    const { categoryName } = useParams();
    const navigate = useNavigate()

    useEffect( ()=> {

       
        const productToShow = getProductsFirebase(categoryName);
        productToShow
        .then( (res) => {
            console.log("holasas")
            setItemArray(res);
        })
        .catch( (err) => {
            console.log("Error: ", err);
            navigate('/notfoundproduct');
        })
        
        // .then( (res) => {

        //     console.log(res);
        //     // setItemArray(
        //     //     res.map(item => ({
        //     //         id: item.id, ...item.data() 
        //     //     }))
        //     // );
        // })
        // .catch( (err) => {
        //     console.log("Error: ",err)
        //     navigate('/notfoundproduct')
        // })

        setHeader(categoryName ? categoryName.toUpperCase() : "" )
 
    },[categoryName, navigate])

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

    //     setHeader(categoryName ? categoryName.toUpperCase() : "" )
 
    // },[categoryName, navigate])

    // useEffect( ()=> {
    //     if(categoryName){
    //         var productToShow = getProductsWithCategory(categoryName)
    //     }else{
    //         var productToShow = getProducts()
    //     }

    //     productToShow
    //     .then( (res) => {
    //         setItemArray(res);
    //         setHeader(categoryName ? categoryName.toUpperCase() : '' )
    //     })
    //     .catch( (err) => {
    //         console.log("Error: ",err)
    //         navigate('/notfoundproduct')
    //     })

    // },[categoryName])

    // useEffect(() =>{
    //     getProductsFirebase();
    // },[]);

    // const getProductsFirebase = async () => {
    
    //     const productSnapshot = await getDocs(collection(db, 'productos'));
    //     const productList = productSnapshot.docs.map((doc)=>{
    //         console.log(doc)
    //         return doc.data();
    //     })
    
    //     console.log(productList);
    // }


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