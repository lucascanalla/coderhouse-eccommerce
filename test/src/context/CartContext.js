import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartListItem, setCartListItem] = useState([])
    const [total, setTotal] = useState(0)
    
    const addProductToCart = (product, typeChosen, quantity) => {
        const { id, title, img } = product;
        const { type, price } = typeChosen;

        let isInCart = cartListItem.find(item => item.id === id && item.type === type)
        if(!isInCart){
            let itemToAdd = {
                                'id': id,
                                'title': title,
                                'type': type,
                                'price': price,
                                'quantity': quantity,
                                'img': img[0]
                            }
            setCartListItem(cartListItem => [...cartListItem, itemToAdd]);
        }else{
            modifyQuantity(id, type, (isInCart.quantity + quantity))
        }
    }

    const modifyQuantity = (id, type, quantityToAdd) => {
        const newList = cartListItem.map(item => {
            if(item.id === id && item.type === type) { 
                return {...item, quantity: quantityToAdd}
            }else{ 
                return item
            }
        })
        setCartListItem(newList);
    }

    const removeItem = (itemId, type) => {
        let newCartListItem = cartListItem.filter(item => 
            (item.id !== itemId))
        setCartListItem(newCartListItem);
    }

    const clear = () => {
        setCartListItem([]);
        setTotal(0)
    }

    const getListItemTotal = () => {
        const initialValue = 0;
        const sumTotal = 
            cartListItem.reduce(
                (previousValue, currentValue) => 
                    previousValue + (currentValue.price * currentValue.quantity), 
                    initialValue
            );
        setTotal(sumTotal)
    }

    const data = {
        cartListItem,
        addProductToCart,
        removeItem,
        clear,
        getListItemTotal,
        modifyQuantity,
        total
    }
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext ;
export { CartProvider }