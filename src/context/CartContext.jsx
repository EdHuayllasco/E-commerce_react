import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
};

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useLocalStorage('cart', []);

    const totalPriceCart = cartItems.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.priceWithDiscount;
    }, 0);

    const quantityItems =  cartItems.reduce((quantity, item) => quantity + item.quantity,0);
      
  
    const deleteItem = (id) => {
        setCartItems( items => {
            return items.filter(item => item.id !== id)
        })
    };

     const addItem = (id, details, quantityToIncrement ) => {
        setCartItems( items => {
            if(items.find(item => item.id === id) == null ){
                return [ ...items, { id, quantity: quantityToIncrement, ...details }]
            } else {
                return items.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + quantityToIncrement }
                    } else {
                        return item
                    }
                })
            }
        })
    };

      const removeItem = (id) => {
        setCartItems( items => {
            if(items.find(item => item.id === id)?.quantity === 1 ){
                return items.filter((item) => item.id !== id)
            } else {
                return items.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1, ...item.details }
                    } else {
                        return item
                    }
                })
            }
        })
    };

    const clearCart = () => setCartItems([]);

    const getQuantityItemById = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    return (
        <CartContext.Provider value={{
            totalPriceCart,
            cartItems,
            quantityItems,
            deleteItem,
            addItem,
            removeItem,
            getQuantityItemById,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
};