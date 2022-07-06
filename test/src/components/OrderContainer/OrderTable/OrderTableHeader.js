import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const OrderTableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center"><strong>Orden Id</strong></TableCell>
                <TableCell align="center"><strong>Fecha y Hora</strong></TableCell>
                <TableCell align="center"><strong>Producto</strong></TableCell>
                <TableCell align="center"><strong>Metodo de Pago</strong></TableCell>
                <TableCell align="center"><strong>Estado</strong></TableCell>
            </TableRow>
        </TableHead>
    );
};

export default OrderTableHeader;