import { TableFooter, TableRow, TableCell } from '@mui/material';
import CheckoutTableDiscount from './CheckoutTableDiscount';

const CheckoutTableFooter = ({
        total,
        getDiscountCodeFirebase,
        handleValidateCoupon,
        discountApplied,
        setDiscountId
    }) => {
    return (
        <TableFooter className='table-footer-custom'>
            <TableRow>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <CheckoutTableDiscount 
                    getDiscountCodeFirebase={getDiscountCodeFirebase}
                    handleValidateCoupon={handleValidateCoupon}
                    discountApplied={discountApplied}
                    setDiscountId={setDiscountId}
                />
                <TableCell align="center">Total</TableCell>
                {
                    discountApplied.status ?
                        <TableCell align="center">
                            <div style={{display: 'grid'}}>
                                <del style={{marginBottom: '5px'}}>
                                    ${total }
                                </del>
                                ${total * ((100 - discountApplied.porcent)/100)}
                            </div>
                        </TableCell>
                    :
                        <TableCell align="center">$ {total}</TableCell>
                }
            </TableRow>
        </TableFooter>
    );
};

export default CheckoutTableFooter;