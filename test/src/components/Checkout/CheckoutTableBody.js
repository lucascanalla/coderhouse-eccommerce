import React, { useState } from 'react';
import { TableBody } from '@mui/material';
import CheckoutTableBodyRow from './CheckoutTableBodyRow';

const CheckoutTableBody = ({ 
        cartListItem, 
        handleDeleteButton, 
        handleChangeQuantity, 
        setCount,
        count
    }) => {

    return (
        <TableBody>
            {
                cartListItem.map((item) => {
                    return (
                        <CheckoutTableBodyRow 
                            item={item}
                            handleDeleteButton={handleDeleteButton}
                            handleChangeQuantity={handleChangeQuantity}
                        />
                    )
                })
            }
        </TableBody>
    );
};

export default CheckoutTableBody;