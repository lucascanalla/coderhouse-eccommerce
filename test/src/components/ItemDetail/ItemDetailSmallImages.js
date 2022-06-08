const ItemDetailSmallImages = ({Item, img}) => {
    return (
        <>
        <Item className='item-detail-custom'>
            {
                img && img.map((i, index) => {
                    return(
                        <img 
                            key={index} 
                            className='detail-small-img' 
                            src={`/${i}`} 
                            alt='title'
                        />
                    )
                })
            }
        </Item>
        </>
    );
};

export default ItemDetailSmallImages;