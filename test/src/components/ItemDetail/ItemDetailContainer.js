import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { getItemFirebase } from '../../selectors';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getItemFirebase(id)
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
    },[id, navigate])
    
    return (
        <>
        {
            <div className='detail-container'>
                <h2>DETALLE</h2>
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