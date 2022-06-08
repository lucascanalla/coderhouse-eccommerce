import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const ItemDetailColors = ({colors}) => {
    return (
        <>
        <p>Colores Disponibles</p>
        <div className='item-colors'>
            <p>
                {
                    colors.map((color, i) => {
                        return(   
                            <Link to={''} key={i} >
                                <CircleIcon style={{color:`${color}`}}></CircleIcon>
                            </Link> 
                        )
                    })
                }
            </p>
        </div>
        </>

    );
};

export default ItemDetailColors;