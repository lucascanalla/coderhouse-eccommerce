import { Divider, Rating } from '@mui/material';

const ItemDetailTitle = ( {title}) => {
    return (
        <>
        <h1 style={{marginBottom: '4px'}}>{title}</h1>
        <Divider variant="middle" style={{marginBottom:'15px'}}/>
        <div className='item-star'>
            <Rating name="read-only" value={4} readOnly />
        </div>
        </>
    );
};

export default ItemDetailTitle;