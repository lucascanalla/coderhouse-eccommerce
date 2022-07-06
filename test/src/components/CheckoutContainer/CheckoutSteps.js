import React, { useContext, useState, useEffect } from 'react';
import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import moment from 'moment'
import CartContext from '../../context/CartContext';
import UserContext from '../../context/UserContext';
import CheckoutTable from './CheckoutTable/CheckoutTable';
import CheckoutDelivery from './CheckoutDelivery/CheckoutDelivery';
import CheckoutPay from './CheckoutPay/CheckoutPay';
import CheckoutPayModal from './CheckoutPay/CheckoutPayModal';
import CheckoutResume from './CheckoutResume/CheckoutResume';
import { saveOrderFirebase } from '../../selectors/orders';
import validatorCustom from '../../utils/validator';


const CheckoutSteps = () => {
    const { 
        cartListItem, 
        getListItemTotal, 
        total, 
        removeItem, 
        modifyQuantity, 
        clear,
        applyDiscount,
        discountApplied,
        setDiscountId,
        updateDiscountStatus
                 } = useContext(CartContext);
    const { user } = useContext(UserContext);

    const [province, setProvince] = useState();
    const [cities, setCities] = useState();
    const [isValid, setIsValid] = useState(false);
    const [openModalPay, setOpenModalPay] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [orderId, setOrderId] = useState('');
    const [formValues, setFormValues] = useState({
        name: '',
        email: user ? user.email : '',
        phone: '',
        code_phone: '',
        address: '',
        address_number: '',
        floor: '',
        apartment: '',
        zip_code: '',
        province: '',
        city: '',
        pay_type:''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: user ? undefined : '',
        phone: '',
        code_phone: '',
        address: '',
        address_number: '',
        zip_code: '',
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
        total: total,
        discount: discountApplied,
        date: moment().format('DD/MM/YYYY - hh:mm'),
        status: ''
    })
    
    const steps = [ 
        'Productos en el Carrito', 
        'Dirección de Envío', 
        'Método de Pago'
    ];

    useEffect( () => {
        getListItemTotal();
        setOrder({...order, 
            items: cartListItem.map(item => {
                return{
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity
                }
            }),
            total: discountApplied.status ? total * ((100 - (discountApplied.porcent))/100) : total,
            discount: discountApplied,
            date: moment().format('DD/MM/YYYY - hh:mm'),
            status: ''
        })
    }, [cartListItem, total, applyDiscount])

    const handleNext = (e) => {
        e.preventDefault();
        switch (activeStep) {
            case 0:
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                break;
            case 1:
                if(isValid){
                    setOrder({...order, buyer: formValues})
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                }
                break;
            case 2:
                if(formValues.pay_type === 'mercadoPago'){
                    //underConstruction
                    handleModalPay();
                    order.status = 'PAY_WITH_MP'
                }else{
                    order.status = 'PENDING_TO_PAY'
                }
                saveOrderFirebase({...order, buyer: formValues})
                .then((res) => {
                    setOrderId(res);
                    clear();
                })
                .catch(err => console.log(err))
                discountApplied.status && updateDiscountStatus()
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                break;
            default:
                break;
        }

    };
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleFinish = () => {};
    const handleModalPay = () => setOpenModalPay(!openModalPay);
    const handleFormChange = (e) => {
        const {value, name} = e.target;
        setFormValues({...formValues, [name]: value})
        let compare = (name === 'repeat_email' ) ? formValues.email : null; 
        let result = validatorCustom(value, name, compare);
        setErrors({...errors, [name]: Object.values(result)[0]})
    }

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
                            applyDiscount={applyDiscount}
                            discountApplied={discountApplied}
                            setDiscountId={setDiscountId}
                        />
                    </>
                }
                {
                    activeStep === 1 &&
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                        <CheckoutDelivery 
                            handleFormChange={handleFormChange}
                            formValues={formValues}
                            setProvince={setProvince}
                            setCities={setCities}
                            cities={cities}
                            setIsValid={setIsValid}
                            errors={errors}
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