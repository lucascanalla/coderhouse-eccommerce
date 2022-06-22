import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState, useEffect } from 'react';
import CheckoutTable from '../Checkout/CheckoutTable';
import CheckoutDelivery from '../CheckoutDelivery/CheckoutDelivery';
import CheckoutPay from '../CheckoutPay/CheckoutPay';
import CartContext from '../../context/CartContext';
import { saveOrderFirebase } from '../../selectors';

const CheckoutSteps = () => {
    const { 
        cartListItem, 
        getListItemTotal, 
        total, 
        removeItem, 
        modifyQuantity
    } = useContext(CartContext);

    useEffect( () => {
        getListItemTotal()
    }, [cartListItem, total])
    
    const [province, setProvince] = useState();
    const [cities, setCities] = useState();

    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        mail: '',
        address: '',
        province: '',
        city: ''
    });
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItem.map(item => {
            return{
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }
        }),
        total: total
    })

    const steps = [ 'Productos en el Carrito', 
                    'Dirección de Envío', 
                    'Método de Pago'
                ];

    const handleNext = (e) => {
        if((activeStep + 1) === 2){
            e.preventDefault();
            setOrder({...order, buyer: formValues})
            //Si yo mando a saveData(order) no se va a enviar los cambios que se hicieron recien, por ende
            saveOrderFirebase({...order, buyer: formValues})
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFinish = () => {
        console.log("handleFinish")
    };

    const handleFormChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value} )
    }

    // const saveData = async (order) => {
        
    // }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper  activeStep={activeStep}>
                {steps.map((step, index) => {
                    return(
                        <Step key={index}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            
            {activeStep === steps.length ? (
            <>
                <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleFinish}>Finalizar Compra</Button>
                </Box>
            </>
            ) : (
            <>
                {
                    activeStep === 0 &&
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                        <CheckoutTable 
                            cartListItem={cartListItem}
                            total={total}
                            removeItem={removeItem}
                            modifyQuantity={modifyQuantity}
                        />
                    </>
                }
                {
                    activeStep === 1 &&
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                        <CheckoutDelivery 
                            handleFormChange={handleFormChange}
                            setProvince={setProvince}
                            setCities={setCities}
                            cities={cities}
                        />
                    </>

                }
                {   activeStep === 2 &&
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                        <CheckoutPay />
                    </>
                }

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant='outlined'
                    >
                        Atras
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button 
                        onClick={handleNext} 
                        variant='outlined' 
                        // disabled={total === 0}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
                    </Button>
                </Box>
            </>
            )}
        </Box>
        
    );
};

export default CheckoutSteps;