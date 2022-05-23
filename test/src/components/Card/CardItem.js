import React, { useState } from 'react'
import { Button, Card, CardContent } from "@mui/material"
import ItemCount from './ItemCount'
import './Card.css'

const CardItem = ({img, title, price, stock}) => {
    
    let initial = 1;
    const [count, setCount] = useState(initial)

    const handleAdd = (e) => {
        if(e.target.id === 'add'){
            setCount(count + 1)
        }else{
            setCount(count - 1)
        }
    }

    return(
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className='card-item'>
                        <div>
                            <img src={img} alt={title}/>
                        </div>
                        <p>{title}</p>
                        <span>${price}</span>
                        <div>
                            <ItemCount count={count} stock={stock} handleAdd={handleAdd} />
                        </div>
                        <Button variant='contained'>Agregar al Carrito</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default CardItem