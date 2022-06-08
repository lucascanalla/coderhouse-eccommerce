import { Rating } from '@mui/material';

const ItemDetailTitle = ( {title}) => {
    return (
        <>
        <h1>{title}</h1>
        <div className='item-star'>
            <Rating name="read-only" value={4} readOnly />
        </div>
        </>
    );
};

export default ItemDetailTitle;