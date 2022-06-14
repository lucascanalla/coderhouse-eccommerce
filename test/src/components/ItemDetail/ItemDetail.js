import React, { useState, useContext } from 'react';
import { Box, Divider, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CartContext from '../../context/CartContext'

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
    const { img, title, description, category, subcategory, price, stock, niu } = item;
    const colors = [{
                        color:'#d3a58d',
                        name: 'Nogal'
                    },
                    {
                        color:'#c99881',
                        name: 'Cedro'
                    },
                    {
                        color:'#bb825e',
                        name: 'Roble'
                    },
                    {
                        color:'#c37321',
                        name: 'Algarrobo'
                    }]
    const [showButton, setShowButton] = useState(false);
    const [priceChosen, setPriceChosen ] = useState('')
    const [type, setType ] = useState('Seleccione')
    const [count, setCount] = useState(initial)

    const { addProductToCart } = useContext(CartContext);

    const onAdd = () => { 
        let typeChosen = {'type': type, 'price': priceChosen}
        addProductToCart(item, typeChosen, count);
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
            <ItemDetailSmallImages Item={Item} img={img}/>
        </Grid>
        <Grid item xs={6}>
            <ItemDetailImage Item={Item} img={img}/>
        </Grid>
        <Grid item xs={4}>
            <Item className='item-detail-custom'>
                <ItemBreadcrumb 
                    category={category} 
                    subcategory={subcategory} 
                    title={title}
                />
                <Box sx={boxValue}>
                    <ItemDetailTitle title={title} />
                    <ItemSelectPrice 
                        priceArray={price} 
                        priceChosen={priceChosen} 
                        setPriceChosen={setPriceChosen} 
                        type={type}
                        setType={setType}
                    />
                    <ItemDetailColors colors={colors} />
                </Box>
                <Box sx={boxValue}>
                    <ItemDetailDescription description={description} />
                </Box>
                {
                    priceChosen &&
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