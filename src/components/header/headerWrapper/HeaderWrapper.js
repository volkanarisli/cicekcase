

import styles from './HeaderWrapper.module.scss'
import '../../../styles/main.scss'
import logo from '../../../images/logo.svg'
import cx from 'classnames'

import SearchInput from '../searchInput/SearchInput'
import Checkout from '../checkout/Checkout'
import { BasketProvider } from '../../../context/BasketContext'

const HeaderWrapper = () => {


    return (
        <div className={cx(styles.header, 'container')}>
            <img height='30' className={styles.logo} src={logo} alt='Logo'></img>
            <SearchInput />

            <Checkout />

        </div>
    )
}

export default HeaderWrapper
