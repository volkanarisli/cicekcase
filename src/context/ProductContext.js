import { useState, createContext, useEffect } from 'react';

import { fetchData } from '../api'

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])



    useEffect(() => {
        (async () => {
            setProducts(await fetchData())
        })()

    }, [setProducts])
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    );
}