import React, { useState } from 'react'
import { Card, CardContent, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ItemCount from './ItemCount'
import ItemModal from './ItemModal'
import './Card.css'

const Item = ({item}) => {
    
    let initial = 1;
    const {img, title, price, stock, niu} = item
    const [open, setOpen] = useState(false);
   
    const handleCloseModal = () => { setOpen(false); }
    const handleOpenModal = () => { setOpen(true); }

    return(
        <>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <a href='#' onClick={handleOpenModal} >
                            { niu && (
                                <FiberNewIcon className='icon-new'/>
                            )}
                            <img src={img} alt={title} />
                        </a>
                    </div>
                    <p>{title}</p>
                    <span>${price}</span>
                    <div>
                        <ItemCount stock={stock} initial={initial} />
                    </div>
                </div>
            </CardContent>
        </Card>

        {open && ( 
            <ItemModal handleCloseModal={handleCloseModal} open={open}>
                <div className='modal-div'>
                    <div>
                        <h2>Detalle</h2>
                        <IconButton onClick={handleCloseModal}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <img src={img} alt={img} />
                </div>
            </ItemModal>                                  
        )}
        </>
    )
}

export default Item