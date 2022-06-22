import React from 'react'
import { TableContainer, Table, Paper } from '@mui/material';
import CheckoutTableHeader from './CheckoutTableHeader';
import CheckoutTableFooter from './CheckoutTableFooter';
import CheckoutTableBody from './CheckoutTableBody';
import './Checkout.css'

const CheckoutTable = ( {cartListItem, 
                        total, 
                        removeItem, 
                        modifyQuantity} ) => {
    

    const handleDeleteButton = (e) => removeItem(e)
    const handleChangeQuantity = (id, type, count) => modifyQuantity(id, type, count)

    return (
        <>
        <TableContainer component={Paper} className='checkout-table-custom'>
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
        </>
    );
};

export default CheckoutTable;