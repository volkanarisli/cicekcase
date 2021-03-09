import styles from './Checkout.module.scss'
import logo from '../../../images/checkout-logo.svg'

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useContext, useEffect } from 'react'

import { BasketContext } from '../../../context/BasketContext'
const Checkout = () => {

    const [basket, setBasket] = useContext(BasketContext)

    return (

        <div className={styles.checkoutWrapper}>
            <OverlayTrigger placement="bottom" overlay={<Tooltip >Tooltip!</Tooltip>}>
                <div>

                    <div className={styles.checkout}>
                        <img src={logo} className='mr-1' alt='checkout-logo' />
                        <p>Sepetim</p>
                    </div>

                    <div className={styles.itemCount}>
                        {basket.length}
                    </div>
                </div>
            </OverlayTrigger>


        </div>


    )
}

export default Checkout
