import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

AppContext.propTypes = {
    children: PropTypes.node,
};

export default function AppContext({ children }) {
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);

    const initalStateHistory = JSON.parse(localStorage.getItem("cart")) || [];

    const [history, setHistory] = useState(initalStateHistory);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(history));
    }, [history]);
      
    


    


    const handleAddcart = (value) => {

        const CartLocal = history.findIndex((product) => product.id === value.id);

        if (CartLocal < 0) {
            const updatedProduct = { ...value, quantity: 1 };
            setHistory([...history, updatedProduct]);
        } else {
            const updatedHistory = history.map((product) => (product.id === value.id ? { ...product, quantity: product.quantity + 1 } : product));
            setHistory(updatedHistory);
        }
    };

    const handleUpdatequantity = (type, product) => {
        // console.log(type);
        // console.log(product);
        const cart = [...history];
        const index = cart.findIndex((item) => item.id == product.id);
        // console.log(index);

        if (type == "minus") {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        } else {
            cart[index].quantity += 1;
        }


       
        setHistory(cart);
    };

    return (
        <Context.Provider
            value={{
                history,
                setHistory,
                cartCount,
                setCartCount,
                cartSubTotal,
                setCartSubTotal,
                handleAddcart,
                handleUpdatequantity,
                cartItems,
                setCartItems,
                detailProduct,
                setDetailProduct,
              
            }}
        >
            {children}
        </Context.Provider>
    );
}
