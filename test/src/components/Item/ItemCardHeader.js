import React, { useState } from 'react';
import { IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ItemModal from './ItemModal';
import { Link } from 'react-router-dom';

const ItemCardHeader = ({img, title, price, niu}) => {
    
    const [open, setOpen] = useState(false);
    const handleModal = () => { setOpen(!open); }

    return (
        <>
        <div>
            <Link to={''} onClick={handleModal}>
                { niu && (
                    <FiberNewIcon className='icon-new'/>
                    )}
                <img src={`/${img[0]}`} alt={title} />
            </Link>
        </div>

        <p>{title}</p>
        <span>${price[0].price}</span> 

        {open && ( 
            <ItemModal handleModal={handleModal} open={open}>
                <div className='modal-div'>
                    <div>
                        <h2>Detalle</h2>
                        <IconButton onClick={handleModal}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <img src={`/${img[0]}`} alt={img[0]} />
                </div>
            </ItemModal>                                  
        )}
        </>
    );
};

export default ItemCardHeader;