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
                cartListItem && cartListItem.map((item, index) => {
                    return (
                        <CheckoutTableBodyRow 
                            key={index}
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