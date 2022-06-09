import React, { useState } from 'react';
import{ TableRow, TableCell, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const CheckoutTableBodyRow = ({
        item,
        handleChangeQuantity,
        handleDeleteButton 
    }) => {

    const { id, title, type, price, quantity, img } = item
    const subtotal = quantity * price
    
    const [count, setCount] = useState(quantity)

    const handleButtonAdd = (e, f, c) => {
        setCount(count+1)
        handleChangeQuantity(e, f, c)
    }
    const handleButtonRest = (e, f, c) => {
        setCount(count-1)
        handleChangeQuantity(e, f, c)
    }
    
    return (
        <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center" style={{width:'170px'}}>
                <img src={`/${img}`} style={{width:'35%'}}/>
            </TableCell>
            <TableCell align="center">{title}</TableCell>
            <TableCell align="center">{type}</TableCell>
            <TableCell align="center">
                <div className='table-quantity'>
                    {count}
                    <div>
                        <Button onClick={(e, f, c) => handleButtonAdd(id, type, (count+1))}>
                            <ArrowDropUpOutlinedIcon />
                        </Button>
                        <Button disabled={count <= 1} onClick={(e, f, c) => handleButtonRest(id, type, (count-1))}>
                            <ArrowDropDownOutlinedIcon />
                        </Button>
                    </div>
                </div>
            </TableCell>
            <TableCell align="center">
                <Button value={id} onClick={(e) => handleDeleteButton(id, type)}>
                    <DeleteIcon />
                </Button>
            </TableCell>
            <TableCell align="center">$ {price}</TableCell>
            <TableCell align="center">$ {subtotal}</TableCell>
        </TableRow>
    );
};

export default CheckoutTableBodyRow;