import { FormControl } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const ItemSelectPrice = ({price}) => {
    const [type, setType ] = useState('Seleccione')
    const [pric, setPric ] = useState('')

    const handleChangeSelect = (e) => {
        setType(e.target.value)
        setPric(e.target.value)
    }
    return (
        <>
        <p>
           $ {pric}
        </p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
            <Select
                value={type}
                onChange={handleChangeSelect}
                autoWidth
                label="Age"
            >
            {

                price && price.map((pr, i) => {
                    return(
                        <MenuItem key={i} value={pr.price} >
                            {pr.type}
                        </MenuItem>
                    )}
                )
            
            } 
            </Select>
        </FormControl>
        </>
    );
};

export default ItemSelectPrice;