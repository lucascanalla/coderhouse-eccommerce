import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartListItem, setCartListItem] = useState([])
    const [item, setItem] = useState([])
    const [count, setCount] = useState([])
    const [type, setType] = useState([])
    
    const addProductToCart = (product, typeChosen, quantity) => {
        console.log("productos a agregar al carrito:", product)
        console.log("Precio elegido:", typeChosen)
        console.log("quantity:", quantity)
        let itemToAdd = {
                    'id': product.id,
                    'title': product.title,
                    'type': typeChosen.type,
                    'price': typeChosen.price,
                    'quantity': quantity,
                    'img': product.img[0]
                }
        
        let isInCart = cartListItem.find(item => item.id === product.id)
        if(!isInCart){
            setCartListItem(cartListItem => [...cartListItem, itemToAdd]);
        }else{
            
        }
    }

    const removeItem = (itemId) => {
        let newCartListItem = cartListItem.filter(item => item.id !== itemId )
        setCartListItem(newCartListItem);
    }

    const clear = () => {
        setCartListItem([]);
    }

    const data = {
        cartListItem,
        addProductToCart,
        removeItem,
        clear
    }
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext ;
export { CartProvider }