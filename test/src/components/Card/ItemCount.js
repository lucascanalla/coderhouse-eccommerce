import React from 'react';
import { Button } from '@mui/material';

const ItemCount = ({ handleAdd, stock, count }) => {

    return (
        <>
            <Button id='rest' variant='outlined' disabled={ count < 1 || stock < 1 } onClick={handleAdd}>-</Button>
                {count}
            <Button id='add' variant='outlined' disabled={ stock < 1 || count === stock }onClick={handleAdd}>+</Button>
        </>
    );
};

export default ItemCount;