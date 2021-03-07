import styles from './Checkout.module.scss'
import logo from '../../../images/checkout-logo.svg'

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Checkout = () => {
    return (

        <div className={styles.checkoutWrapper}>
            <OverlayTrigger placement="bottom" overlay={<Tooltip >Tooltip!</Tooltip>}>
                <div>

                    <div className={styles.checkout}>
                        <img src={logo} className='mr-1' alt='checkout-logo' />
                        <p>Sepetim</p>
                    </div>

                    <div className={styles.itemCount}>
                        1
                  </div>
                </div>
            </OverlayTrigger>


        </div>


    )
}

export default Checkout
