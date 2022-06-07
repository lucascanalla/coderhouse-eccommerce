import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { getItemWithFilter } from '../../selectors';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getItemWithFilter(id)
        .then((res) => {
            setItem(res);
        })
        .catch((err) => {
            console.log("Error: ",err);
            navigate('/notfound');
        })
        .finally(() => {
            console.log("Finally");
        })
    },[id])
    
    return (
        <>
        {
            <div className='detail-container'>
                <h2>Detalle</h2>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} alignItems="stretch">
                        <ItemDetail item={item} />   
                    </Grid>
                </Box>
            </div>
        }
        </>
    );
};

export default ItemDetailContainer;