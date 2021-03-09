import styles from './ProductCard.module.scss'
import cx from 'classnames'

import PropTypes from 'prop-types'
import { useEffect, useState, useContext } from 'react'



import { BasketContext } from '../../context/BasketContext'








const ProductCard = ({ product }) => {

    const [img, setImage] = useState({})
    const [basket, setBasket] = useContext(BasketContext)

    const addToBasket = (product) => {

        setBasket(prevItems => {
            console.log(prevItems)
            console.log(product)
            console.log([...prevItems, product])
            return [...prevItems, product]
        })
       
    }


    const addButton = (
        <button className="button w-100 bg-color-white text-color-blue" onClick={() => addToBasket(product)}>Sepete Ekle</button>
    )

    const updateCount = (
        <div className={cx('d-flex justify-content-between align-items-center', styles.updateCount)}>
            <span className={styles.updateCountButton}>-</span>
            <span>0</span>
            <span className={styles.updateCountButton}>+</span>
        </div>

    )


    useEffect(() => {

        (async () => {
            setImage(await import(`./../../images/${product.id}.png`))

        })()
    })
    return (

        <div className={styles.productCard}>
            <img src={img.default} alt="deneme" />
            <p className={styles.productName}>{product.name}</p>
            {product.isShipmentFree && <p className='text-color-green'>Ücretsiz Teslimat</p>}
            {`${product.price}TL`}
            {addButton}

        </div>
    )
}

ProductCard.prototype = {
    promotion: PropTypes.object.isRequired
}

export default ProductCard
