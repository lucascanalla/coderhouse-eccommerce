import React from 'react';
import { Grid } from '@mui/material';
import Item from './Item';

const ItemList = ({item}) => {
    return (
        <>
        <Grid item md={3}>
            <div className='card-item-gral'>
                <Item item={item} />
            </div>
        </Grid>  
        </>
    );
};

export default ItemList;