import { TableFooter, TableRow, TableCell } from '@mui/material';

const CheckoutTableFooter = ({total}) => {
    return (
        <TableFooter className='table-footer-custom'>
            <TableRow>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">$ {total}</TableCell>
            </TableRow>
        </TableFooter>
    );
};

export default CheckoutTableFooter;