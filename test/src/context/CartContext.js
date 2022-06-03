import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartListItem, setCartListItem] = useState([])
    
    const addProductToCart = (product) => {
        //console.log("productos a agregar al carrito:", product)

        let isInCart = cartListItem.find(item => item.id === product.id)
        //console.log(isInCart);
        if(!isInCart){
            setCartListItem(cartListItem => [...cartListItem, product]);
        }
    }
    const data = {
        cartListItem,
        addProductToCart
    }
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext ;
export { CartProvider }