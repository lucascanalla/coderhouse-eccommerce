import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const OrderTableBodyRow = ({order}) => {
    
    const {id, buyer, status, items, date} = order
    return (
        <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">{id}</TableCell>
            <TableCell align="center">{date}</TableCell>
            <TableCell align="center">{items.length}</TableCell>
            <TableCell align="center">{buyer.pay_type}</TableCell>
            <TableCell align="center">{status}</TableCell>
        </TableRow>
    );
};

export default OrderTableBodyRow;