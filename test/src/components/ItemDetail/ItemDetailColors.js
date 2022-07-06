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
                    colors && colors.map((data) => {
                        return(
                            <Tooltip key={data.id} title={data.name} placement="bottom">
                                <Link to={''}>
                                    <CircleIcon style={{color:`${data.rgb}`}}></CircleIcon>
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