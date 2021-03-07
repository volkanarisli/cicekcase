import styles from './headerWrapper.module.scss'
import '../../../styles/main.scss'
import logo from '../../../images/logo.svg'
import cx from 'classnames'

import SearchInput from '../searchInput/SearchInput'
import Checkout from '../checkout/Checkout'

const headerWrapper = () => {
    return (
        <div className={cx(styles.header, 'container')}>
            <img height='30' className={styles.logo} src={logo} alt='Logo'></img>
            <SearchInput />
            <Checkout/>
        </div>
    )
}

export default headerWrapper
