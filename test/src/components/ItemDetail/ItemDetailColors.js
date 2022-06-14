import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const ItemDetailColors = ({colors}) => {
    return (
        <>
        <p>Colores Disponibles</p>
        <div className='item-colors'>
            <p>
                {
                    colors.map((data, i) => {
                        return(
                            <Tooltip  title={data.name} placement="bottom">
                                <Link to={''} key={i} >
                                    <CircleIcon style={{color:`${data.color}`}}></CircleIcon>
                                </Link> 
                            </Tooltip>
                        )
                    })
                }
            </p>
        </div>
        </>

    );
};

export default ItemDetailColors;