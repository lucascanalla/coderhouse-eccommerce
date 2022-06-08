import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemCardBody = ({id}) => {
    return (
        <div className='card-item-button'>
            <Button variant='outlined' >
                <Link to={`detail/${id}`} >
                    Ver Detalle
                </Link>
            </Button>
        </div>
    );
};

export default ItemCardBody;