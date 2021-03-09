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

    const updateProducts = (query, categoryId) => {
        (async () => {
            setProducts(await fetchData(query, categoryId))
        })()
    }
    return (
        <ProductContext.Provider value={[products, updateProducts]}>
            {children}
        </ProductContext.Provider>
    );
}