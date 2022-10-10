// file to manage the entire state of the application
//import react hooks
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast'; //imported toast for pop up notification when item is added to cart

const Context = createContext(); //call as hook
export const StateContext = ( { children } ) => {
    //create the states
    const [showCart, setshowCart] = useState(false); //manage the state of the cart if it's being shown or not
    const [cartItems, setcartItems] = useState() //to know what items are in the cart. Will be filled with data coming from local storage
    //when user leaves site, the items will no get erased.
    const [totalPrice, settotalPrice] = useState() //keep track of the total price 
    const [totalQuantities, settotalQuantities] = useState() //to know the quantities of the items you are working with
    const [qty, setqty] = useState(1)

    // return ContextProvider wrapping the values(state fields) that will be passed in the entire application
    //The values passed can be accessed from any of the componentsci

    //dynamic update quantity function to manage incrementing items 
    const incQty = () => {
        setQty(( prevQty ) => prevQty + 1);
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty -1
        });
    }


    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
        }}
        >  
            {children}
        </Context.Provider>
    )
}

