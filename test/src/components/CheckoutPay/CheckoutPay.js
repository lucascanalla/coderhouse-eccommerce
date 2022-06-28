import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const CheckoutPay = ({handleFormChange}) => {
    
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="transferenciaBancaria"
                name="pay_type"
                onChange={handleFormChange}
            >
                <FormControlLabel value="mercadoPago" 
                    control={<Radio />} 
                    label="Mercado Pago" 
                />
                <FormControlLabel value="transferenciaBancaria" 
                    control={<Radio />} 
                    label="Transferencia Bancaria" 
                />
            </RadioGroup>
        </FormControl>
    );
};

export default CheckoutPay;