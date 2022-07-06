import React, { useState, useContext, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CartContext from '../../context/CartContext'
import { getColorsFirebase } from '../../selectors/items';

import ItemDetailSmallImages from './ItemDetailSmallImages';
import ItemDetailImage from './ItemDetailImage';
import ItemBreadcrumb from './ItemBreadcrumb';
import ItemDetailTitle from './ItemDetailTitle';
import ItemSelectPrice from './ItemSelectPrice';
import ItemDetailColors from './ItemDetailColors';
import ItemDetailDescription from './ItemDetailDescription';
import ItemCount from '../Item/ItemCount'

import './ItemDetail.css'

const ItemDetail = ({item}) => {

    let initial = 1
    const { img, title, description, category, subcategory, price, stock } = item;

    const [showButton, setShowButton] = useState(false);
    const [type, setType ] = useState({
        type: '',
        price: ''
    })
    const [count, setCount] = useState(initial)
    const [colors, setColors] = useState();

    useEffect(() => {
        const colorsToShow = getColorsFirebase();
        colorsToShow
        .then((res) => {
            setColors(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const { addProductToCart } = useContext(CartContext);

    const onAdd = () => { 
        addProductToCart(item, type, count);
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
            <ItemDetailSmallImages 
                Item={Item} 
                img={img}
            />
        </Grid>
        <Grid item xs={6}>
            <ItemDetailImage 
                Item={Item} 
                img={img}
            />
        </Grid>
        <Grid item xs={4}>
            <Item className='item-detail-custom'>
                <ItemBreadcrumb 
                    category={category} 
                    subcategory={subcategory} 
                    title={title}
                />
                <Box sx={boxValue}>
                    <ItemDetailTitle 
                        title={title} 
                    />
                    <ItemSelectPrice 
                        priceArray={price} 
                        //priceChosen={priceChosen} 
                        //setPriceChosen={setPriceChosen} 
                        type={type}
                        setType={setType}
                    />
                    <ItemDetailColors 
                        colors={colors} 
                    />
                </Box>
                <Box sx={boxValue}>
                    <ItemDetailDescription 
                        description={description} 
                    />
                </Box>
                {
                    type.price &&
                    <div className='detail-button'>
                        <ItemCount 
                            stock={stock} 
                            initial={1} 
                            onAdd={onAdd} 
                            showButton={showButton}
                            count={count}
                            setCount={setCount}
                        />
                    </div>
                }
            </Item>
        </Grid>
        </>
    )
}
export default ItemDetail;