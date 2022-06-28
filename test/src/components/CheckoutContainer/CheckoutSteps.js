import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState, useEffect } from 'react';
import CheckoutTable from '../Checkout/CheckoutTable';
import CheckoutDelivery from '../CheckoutDelivery/CheckoutDelivery';
import CheckoutPay from '../CheckoutPay/CheckoutPay';
import CartContext from '../../context/CartContext';
import { saveOrderFirebase } from '../../selectors';
import CheckoutPayModal from '../CheckoutPay/CheckoutPayModal';
import CheckoutResume from '../CheckoutResume/CheckoutResume';
import { Link } from 'react-router-dom';


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
    const [orderId, setOrderId] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [cities, setCities] = useState();
    const [openModalPay, setOpenModalPay] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState({
        name: '',
        mail: '',
        phone: '',
        code_phone: '',
        address: '',
        address_number: '',
        province: '',
        city: '',
        pay_type:''
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
        if (activeStep === 1) {
            e.preventDefault();
            setOrder({...order, buyer: formValues})
        }
        if (activeStep === 2) {
            e.preventDefault();
            if (formValues.pay_type === 'mercadoPago') {
                //Under Construction
                handleModalPay();
            }
            saveOrderFirebase({...order, buyer: formValues})
            .then((res) => {
                setOrderId(res)
            })
            .catch((err) => {
                console.log(err);
            })
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
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleModalPay = () => {setOpenModalPay(!openModalPay)}
    

    return (
        <>
        <Box sx={{ width: '100%' }}>
            <Stepper  activeStep={activeStep}>
                {
                    steps.map((step, index) => {
                        return(
                            <Step key={index}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        )
                    })
                }
            </Stepper>
            
            {activeStep === steps.length ? (
            <>
                <CheckoutResume 
                    orderId={orderId} 
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleFinish}>
                        <Link to={'/'} >
                            Volver
                        </Link>
                    </Button>
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
                            setIsValid={setIsValid}
                        />
                    </>

                }
                {   
                    activeStep === 2 &&
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                        <CheckoutPay 
                            handleFormChange={handleFormChange}
                        />
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
                        type={activeStep === 1 ? 'submit':'button'}
                        disabled={(activeStep === 1) & (!isValid)}
                        //{(activeStep === 1 & !isValid) && 'disabled'}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
                    </Button>
                </Box>
            </>
            )}
        </Box>
        {
            openModalPay && (
                <CheckoutPayModal 
                    handleModalPay={handleModalPay}
                    openModalPay={openModalPay}
                >
                </CheckoutPayModal>    
            )
        }
        </>
    );
};

export default CheckoutSteps;