import { TableHead, TableRow, TableCell } from '@mui/material';
import React from 'react';

const CheckoutTableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center"><strong>Imagen</strong></TableCell>
                <TableCell align="center"><strong>Producto</strong></TableCell>
                <TableCell align="center"><strong>Material</strong></TableCell>
                <TableCell align="center"><strong>Cantidad</strong></TableCell>
                <TableCell align="center"><strong>Accion</strong></TableCell>
                <TableCell align="center"><strong>Precio</strong></TableCell>
                <TableCell align="center"><strong>Subtotal</strong></TableCell>
            </TableRow>
        </TableHead>
    )
};

export default CheckoutTableHeader;