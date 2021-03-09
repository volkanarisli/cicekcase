import { useState, createContext, useEffect } from 'react';



export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([])



    useEffect(() => {
     console.log(basket)
    })
    return (
        <BasketContext.Provider value={[basket, setBasket]}>
            {children}
        </BasketContext.Provider>
    );
}