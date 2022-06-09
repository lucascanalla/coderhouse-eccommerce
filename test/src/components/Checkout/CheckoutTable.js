import React, { useContext, useEffect, useState } from 'react'
import {TableContainer, Table, Paper } from '@mui/material';
import CartContext from '../../context/CartContext';
import CheckoutTableHeader from './CheckoutTableHeader';
import CheckoutTableFooter from './CheckoutTableFooter';
import CheckoutTableBody from './CheckoutTableBody';
import './Checkout.css'

const CheckoutTable = () => {

    const { 
            cartListItem, 
            getListItemTotal, 
            total, 
            removeItem, 
            modifyQuantity
        } = useContext(CartContext);
    
    useEffect( () => {
        getListItemTotal()
    }, [cartListItem])

    const handleDeleteButton = (e) => removeItem(e)
    const handleChangeQuantity = (id, type, count) => modifyQuantity(id, type, count)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <CheckoutTableHeader />
                <CheckoutTableBody 
                    cartListItem={cartListItem} 
                    handleDeleteButton={handleDeleteButton}
                    handleChangeQuantity={handleChangeQuantity}
                />
                <CheckoutTableFooter total={total}/>
            </Table>
        </TableContainer>
        
    );
};

export default CheckoutTable;