import React from 'react'
import { TableContainer, Table, Paper } from '@mui/material';
import { getDiscountCodeFirebase } from '../../../selectors/discount';
import CheckoutTableHeader from './CheckoutTableHeader';
import CheckoutTableBody from './CheckoutTableBody';
import CheckoutTableFooter from './CheckoutTableFooter';
import './Checkout.css'

const CheckoutTable = ( {cartListItem, 
                        total, 
                        removeItem, 
                        modifyQuantity,
                        applyDiscount,
                        discountApplied,
                        setDiscountId} ) => {
    

    const handleDeleteButton = (e) => removeItem(e)
    const handleChangeQuantity = (id, type, count) => modifyQuantity(id, type, count)
    const handleValidateCoupon = (discount) => applyDiscount(discount)

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
                <CheckoutTableFooter 
                    total={total}
                    getDiscountCodeFirebase={getDiscountCodeFirebase}
                    handleValidateCoupon={handleValidateCoupon}
                    discountApplied={discountApplied}
                    setDiscountId={setDiscountId}
                />
            </Table>
        </TableContainer>
        </>
    );
};

export default CheckoutTable;