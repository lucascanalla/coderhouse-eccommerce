import React from 'react';
import { Grid } from '@mui/material';
import Item from './Item';


const ItemList = ({title, price, img, stock, niu}) => {
    return (
        <>
            <Grid item md={3}>
                <div className='card-item-gral'>
                    <Item title={title} price={price} img={img} stock={stock} niu={niu} />
                </div>
            </Grid>  
        </>
    );
};

export default ItemList;