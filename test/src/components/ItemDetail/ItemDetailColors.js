import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

const ItemDetailColors = ({colors}) => {
    const handleChangeColor = () => {

    }

    return (
        <div className='item-colors'>
        <p>
            {
            colors.map((color, i) => {
                return(

                    <a href='#' key={i} name={color} onClick={handleChangeColor}>
                        <CircleIcon style={{color:`${color}`}}></CircleIcon>
                    </a>
                )
            })
            }
        </p>

        </div>
    );
};

export default ItemDetailColors;