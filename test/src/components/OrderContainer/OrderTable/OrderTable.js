import React from 'react';
import { TableContainer, Table, Paper } from '@mui/material';
import OrderTableHeader from './OrderTableHeader';
import OrderTableBody from './OrderTableBody';

const OrderTable = ({ordersUser}) => {
    return (
        <TableContainer component={Paper} className='checkout-table-custom'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <OrderTableHeader />
                <OrderTableBody 
                    ordersUser={ordersUser}
                />
            </Table>
        </TableContainer>
    );
};

export default OrderTable;