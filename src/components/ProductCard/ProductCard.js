import styles from './ProductCard.module.scss'
import cx from 'classnames'

import PropTypes from 'prop-types'
import { useEffect, useState, useContext } from 'react'



import { BasketContext } from '../../context/BasketContext'








const ProductCard = ({ product }) => {

    const [img, setImage] = useState({})
    const [amountOnBasket, setAmountOnBasket] = useState(0)
    const [basket, setBasket] = useContext(BasketContext)

    const addToBasket = (product) => {

        setBasket(prevItems => [...prevItems, product])
        setAmountOnBasket(() => {

            const filteredBasket = basket.filter(item => item.id === product.id);

            return filteredBasket.length + 1
        })



    }

    const removeFromBasket = (product) => {
        setAmountOnBasket(() => {

            let filteredBasket = basket.filter(item => item.id === product.id)
            filteredBasket.pop()
            setBasket((prevItems) => {
                const filterPrev = prevItems.filter(item => item.id !== product.id)


                return [...filterPrev, ...filteredBasket]
            })

            return filteredBasket.length
        })



    }


    const addButton = (
        <button className="button w-100 bg-color-white text-color-blue" onClick={() => addToBasket(product)}>Sepete Ekle</button>
    )

    const updateCount = (
        <div className={cx('d-flex justify-content-between align-items-center', styles.updateCount)}>
            <span className={styles.updateCountButton} onClick={() => removeFromBasket(product)}>-</span>
            <span>{amountOnBasket}</span>
            <span className={styles.updateCountButton} onClick={() => addToBasket(product)}>+</span>
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
            {amountOnBasket === 0 ? addButton : updateCount}

        </div>
    )
}

ProductCard.prototype = {
    promotion: PropTypes.object.isRequired
}

export default ProductCard
