const ItemDetailImage = ({Item, img}) => {
    return (
        <>
        <Item className='item-detail-custom'>
            {
                img && img !== 'undefined' &&
                <img className='detail-img' src={`/${img[0]}`} alt='title' />
            }
        </Item>
        </>
    );
};

export default ItemDetailImage;