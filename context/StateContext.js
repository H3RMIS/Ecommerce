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

    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalPrice,
            totalQuantities,
            qty
        }}
        >  
            {children}
        </Context.Provider>
    )
}

