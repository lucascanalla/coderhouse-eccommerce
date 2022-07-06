import { Grid, Paper } from '@mui/material';
import React from 'react';

const HomeCarrouselItem = ({item}) => {
    return (
        <Grid spacing={2} style={{backgroundColor: 'grey'}}>
            <Paper style={{marginBottom: '15px'}}>
                <div style={{display: 'flex'}}>
                    <Grid item>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </Grid>
                    <Grid item>
                        <img style={{width: '30%'}} src={`/${item.img}`} alt={item.name} />
                    </Grid>
                </div>
            </Paper>
        </Grid>
    );
};

export default HomeCarrouselItem;