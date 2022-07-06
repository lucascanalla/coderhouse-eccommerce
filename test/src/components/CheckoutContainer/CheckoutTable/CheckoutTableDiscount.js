import { TableCell, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

const CheckoutTableDiscount = ({
        discountApplied,
        getDiscountCodeFirebase,
        handleValidateCoupon,
        setDiscountId
    }) => {

    const [validateCode, setValidateCode] = useState('');
    const [codeApplied, setCodeApplied] = useState(false);
    const [messageCode, setMessageCode] = useState('');

    const handleValidateDiscount = () => {
        const codeToValidate = getDiscountCodeFirebase(validateCode)
        codeToValidate
        .then(res => {
                handleValidateCoupon(res)
                setDiscountId(res.id)
            }
        )
        .catch(err => setMessageCode("Error al validar codigo de descuento!"))
        setCodeApplied(true)
    }
    const handleChange = (e) => {
        setValidateCode(e.target.value)
    }

    return (
        <>
        <TableCell align="center">Cupon de Descuento</TableCell>
        {!discountApplied.status ? 
            <TableCell align="center">
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="code-discount">Codigo</InputLabel>
                    <OutlinedInput
                        id="code-discount"
                        label="Codigo"
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleValidateDiscount}
                                    edge="end"
                                >
                                    <CheckCircleOutlineIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {
                    codeApplied &&
                    <p style={{margin: '0px', fontSize: 'medium'}}> 
                        {messageCode} 
                    </p>
                }
            </TableCell>
            :
            <TableCell align="center">
                Cupon Aplicado!
            </TableCell>
        }
        </>
    );
};

export default CheckoutTableDiscount;