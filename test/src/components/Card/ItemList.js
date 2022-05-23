import React from 'react';
import { Grid } from '@mui/material';
import Item from './Item';


const ItemList = ({title, price, img, stock, id}) => {
    return (
        <>
            <Grid item md={3} key={id}>
                <div className='card-item-gral'>
                    <Item title={title} price={price} img={img} stock={stock} />
                </div>
            </Grid>  
        </>
    );
};

export default ItemList;