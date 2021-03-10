import styles from './Checkout.module.scss'
import logo from '../../../images/checkout-logo.svg'
import thunder from '../../../images/thunder.svg'

import { OverlayTrigger, Tooltip, ProgressBar } from 'react-bootstrap';
import { useContext } from 'react'

import { BasketContext } from '../../../context/BasketContext'

const Checkout = () => {

    const [basket] = useContext(BasketContext)

    const sumOfBasket = basket.reduce((a, b) => +a + +b.price, 0);

    const percantage = sumOfBasket / 5

    const tooltipContent = (
        <div>
            {
                500 - sumOfBasket <= 0 ?
                    <p>Kargonuz Bedava</p>
                    :
                    <p className="d-flex align-items-center fs-11 mb-2"><img className="mr-1" src={thunder} alt="thunder" />
                        <span className="text-color-yellow">
                            {(500 - sumOfBasket).toFixed(2)}
                        </span>
                TL  ürün daha ekleyin kargo bedava
            </p>
            }
            <ProgressBar className="ml-3" now={percantage} min={0} max={100} />
        </div>
    )
    return (

        <div className={styles.checkoutWrapper}>
            {/* default set to open  */}
            <OverlayTrigger show placement="bottom" overlay={<Tooltip>{tooltipContent}</Tooltip>}>
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
