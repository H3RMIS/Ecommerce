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

    //function to add products to cart when add to cart button is clicked
    const onAdd = (product, quantity) => {
        //check if the product being added is already in the cart
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        //this will be executed if trying to add an item that already exists in the cart
        if(checkProductInCart) {

            const updatedcartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            //allows adding of the same product but not adding a duplicated
            //the code tells that the item is already available in the cart
            //,instead it increments the quantity
            //number and total price
            setcartItems(updatedcartItems);
        }else{
            //item does not exist in the cart
            //i)Update the products quantity
            product.quantity = quantity;
            setcartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart`)
    }

    //dynamic update quantity function to manage incrementing items 
    const incQty = () => {
        setqty(( prevQty ) => prevQty + 1);
    }
    const decQty = () => {
        setqty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty -1;
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
            onAdd,
        }}
        >  
            {children}
        </Context.Provider>
    )
}

export const useSateContext = () => useContext(Context);