import { TableBody } from '@mui/material';
import React from 'react';
import OrderTableBodyRow from './OrderTableBodyRow';

const OrderTableBody = ({ordersUser}) => {
    console.log(ordersUser)
    return (
        <TableBody>
            {
                ordersUser != null ? 
                    ordersUser.map((order, index) => {
                        return (
                            <OrderTableBodyRow 
                                key={index}
                                order={order}
                            />
                        )
                    })
                :
                    <h3>Espere...</h3>
            }
        </TableBody>
    );
};

export default OrderTableBody;