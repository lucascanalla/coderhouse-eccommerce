import React, { useState, useContext } from 'react'
import { Card, CardContent } from "@mui/material"
import ItemCount from './ItemCount'
import './Card.css'

import CartContext from '../../context/CartContext';
import ItemCardHeader from './ItemCardHeader';
import ItemCardBody from './ItemCardBody';

const Item = ({item}) => {
    
    let initial = 1;
    const {img, title, price, stock, niu, id, category} = item
    const [count, setCount] = useState(initial)
    const [showButton, setShowButton] = useState(false);
    const { addProductToCart } = useContext(CartContext)

    const onAdd = () => { 

        addProductToCart(item, price[0], count);
        setShowButton(true);
        //console.log("Elementos a agregar al carrito: ", count) 
    }


    return(
        <>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <ItemCardHeader 
                        title={title} 
                        price={price}
                        img={img}
                        niu={niu}
                    /> 
                    <ItemCardBody id={id} />
                    <ItemCount 
                        stock={stock} 
                        initial={initial} 
                        showButton={showButton} 
                        onAdd={onAdd}
                        count={count}
                        setCount={setCount}
                    />
                </div>
            </CardContent>
        </Card>
        </>
    )
}

export default Item