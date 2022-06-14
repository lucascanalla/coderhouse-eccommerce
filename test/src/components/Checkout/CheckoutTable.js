import React, { useContext, useEffect, useState } from 'react'
import {TableContainer, Table, Paper, Button, IconButton, TextField } from '@mui/material';
import CartContext from '../../context/CartContext';
import CheckoutTableHeader from './CheckoutTableHeader';
import CheckoutTableFooter from './CheckoutTableFooter';
import CheckoutTableBody from './CheckoutTableBody';
import CheckoutModal from './CheckoutModal';
import './Checkout.css'

const CheckoutTable = () => {
    const { 
            cartListItem, 
            getListItemTotal, 
            total, 
            removeItem, 
            modifyQuantity
        } = useContext(CartContext);

    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        mail: ''
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
    

    
    useEffect( () => {
        getListItemTotal()
    }, [cartListItem, total])

    const handleModal = () => { setOpen(!open) }

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrder({...order, buyer: formValues})
        //Si yo mando a saveData(order) no se va a enviar los cambios que se hicieron recien, por ende
        saveData({...order, buyer: formValues})

        console.log("datos formulario: ", formValues)
    }

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value} )
    }

    const saveData = async (order) => {
        //ALGO DE FIREBASE
    }


    const handleDeleteButton = (e) => removeItem(e)
    const handleChangeQuantity = (id, type, count) => modifyQuantity(id, type, count)

    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <CheckoutTableHeader />
                <CheckoutTableBody 
                    cartListItem={cartListItem} 
                    handleDeleteButton={handleDeleteButton}
                    handleChangeQuantity={handleChangeQuantity}
                    />
                <CheckoutTableFooter total={total}/>
            </Table>
        </TableContainer>
        
        <div style={{display: 'flex', alignContent:'end'}} >
            <Button variant='outlined' onClick={handleModal} >
                completar compra
            </Button>
            
        </div>
        {open && ( 
            <CheckoutModal handleModal={handleModal} open={open}>
                <div className='modal-div'>
                    <form>
                        <TextField
                            name="name"
                            label="Nombre"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="phone"
                            label="Telefono"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            name="mail"
                            label="Mail"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <Button onClick={handleSubmit}>
                            Seguir
                        </Button>
                    </form>
                </div>
            </CheckoutModal>                                  
        )}
        
        </>
    );
};

export default CheckoutTable;