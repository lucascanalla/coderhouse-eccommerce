import React, { useState } from 'react';
import { Rating, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ItemDetailColors from './ItemDetailColors';
import ItemBreadcrumb from './ItemBreadcrumb';
import ItemSelectPrice from './ItemSelectPrice';
import ItemCount from '../Item/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({item}) => {

    const { img, title, description, category, subcategory, price, stock, niu } = item;
    const colors = ['yellow', 'orange', 'black', 'blue'];
    const [showButton, setShowButton] = useState(false);

    const onAdd = () => { 
        setShowButton(true);
    }
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1976d214',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: 'stretch'
    }));

    const boxValue = {  p: 2, 
                        border: '1px double grey', 
                        borderRadius: '12px',
                        margin: '15px'     
                    }
    
    return(
        <>
        <Grid item xs={2}>
            <Item>
                {
                   img && img.map((i, index) => {
                        <img key={index} className='detail-small-img' src={i} alt='title' />
                    })

                }
            </Item>
        </Grid>
        <Grid item xs={6}>
            <Item>
                {
                    img && img !== 'undefined' ?
                        <img className='detail-img' src={img[0]} alt='title' />
                    :
                    <></>
                }
            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
                <ItemBreadcrumb 
                    category={category} 
                    subcategory={subcategory} 
                    title={title}
                />
                <Box sx={boxValue}>
                    <h1>{title}</h1>
                    <div className='item-star'>
                        <Rating name="read-only" value={4} readOnly />
                    </div>
                    <ItemSelectPrice price={price} />
                    <p>Colores Disponibles</p>
                    <ItemDetailColors colors={colors} />
                </Box>
                <div className='detail-button'>
                    <ItemCount 
                        stock={stock} 
                        initial={1} 
                        onAdd={onAdd} 
                        showButton={showButton} 
                    />
                </div>
            </Item>
        </Grid>
        </>
    )
}
export default ItemDetail;