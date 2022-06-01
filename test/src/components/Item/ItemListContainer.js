import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { initialCards } from '../../data';
import { useNavigate, useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './Card.css';

const ItemListContainer = () => {
    
    const [itemArray, setItemArray] = useState();
    const { name } = useParams();
    const navigate = useNavigate()

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

    const getProductsWithCategory = (category) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let init =  initialCards.filter((data) => { 
                        return ( data.category === category )
                    })
                if (init.length > 0 ) { resolve(init)
                }else{ reject("error finding products") }
            })
        })
    }

    useEffect( ()=> {
        if(name){
            getProductsWithCategory(name)
            .then( (res) => {
                console.log(res)
                setItemArray(res)
            })
            .catch( (err) => {
                console.log("Error: ",err)
                navigate('/notfoundproduct')
            })
            .finally( () => {
                console.log("End of ejecution")
            })
        }else{
            getProducts()
            .then( (res) => {
                console.log(res)
                setItemArray(res);
            })
            .catch( (err) => {
                console.log("Error: ",err)
            })
            .finally( () => {
                console.log("End of ejecution")
            })
        }
    
    },[name])

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