import { useContext } from 'react'


import styles from './Products.module.scss'
import ProductCard from '../ProductCard/ProductCard'
import pin from './../../images/pin.svg'

import { ProductContext } from '../../context/ProductContext'



const Products = () => {
    const [products] = useContext(ProductContext)

    
    return (

        <div className="container">
            <div className="d-flex mb-2">
                <img src={pin} alt="pin" className="mr-2" />
                <p>Tüm Kategoriler</p>
            </div>
            <div className={styles.products}>
                {
                    products.map((product, index) => (

                        <ProductCard product={product} key={index} />

                    ))
                }

            </div>
        </div>

    )
}

export default Products
