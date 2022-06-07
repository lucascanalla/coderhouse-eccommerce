import React, { useState, useContext } from 'react';
import { Rating, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ItemDetailColors from './ItemDetailColors';
import ItemBreadcrumb from './ItemBreadcrumb';
import ItemSelectPrice from './ItemSelectPrice';
import ItemCount from '../Item/ItemCount'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'


const ItemDetail = ({item}) => {

    let initial = 1
    const { img, title, description, category, subcategory, price, stock, niu } = item;
    const colors = ['yellow', 'orange', 'black', 'blue'];
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
            <Item className='item-detail-custom'>
                {
                   img && img.map((i, index) => {
                        return(
                            <img key={index} className='detail-small-img' src={`/${i}`} alt='title' />
                        )
                    })

                }
            </Item>
        </Grid>
        <Grid item xs={6}>
            <Item className='item-detail-custom'>
                {
                    img && img !== 'undefined' ?
                        <img className='detail-img' src={`/${img[0]}`} alt='title' />
                    :
                    <></>
                }
            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item className='item-detail-custom'>
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
                    <ItemSelectPrice 
                        price={price} 
                        priceChosen={priceChosen} 
                        setPriceChosen={setPriceChosen} 
                        type={type}
                        setType={setType}
                    />
                    <p>Colores Disponibles</p>
                    <ItemDetailColors colors={colors} />
                </Box>
                <Box sx={boxValue}>
                    <h4 style={{marginTop: '10px', marginBottom: '10px'}}>
                        Caracteristicas del Producto
                    </h4>
                    <p>{description}</p>
                    
                </Box>
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
            </Item>
        </Grid>
        </>
    )
}
export default ItemDetail;