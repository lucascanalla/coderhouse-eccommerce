import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import OrderTable from './OrderTable/OrderTable';
import UserContext from '../../context/UserContext';
import { getOrdersFirebase } from '../../selectors/orders';
import './Order.css';

const OrderContainer = () => {

    const { user} = useContext(UserContext)
    const [ordersUser, setOrdersUser] = useState();

    useEffect(() => {
        const ordersToShow = getOrdersFirebase(user.email);
        ordersToShow        
        .then((res) => {
            setOrdersUser(res)
        })
        .catch((err) => console.log(err))
    }, [user])

    return (
        <Container className='order-container'>
            <OrderTable 
                ordersUser={ordersUser}
            />
        </Container>
    );
};

export default OrderContainer;