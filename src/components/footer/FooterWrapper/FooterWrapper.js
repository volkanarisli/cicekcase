import styles from './FooterWrapper.module.scss'
import cx from 'classnames'


import DownloadApp from '../DownloadApp/DownloadApp.js'
import CompanyInfo from '../CompanyInfo/CompanyInfo.js'
import Copyright from '../Copyright/Copyright'
import CicekInfo from '../Copyright/CicekInfo'



const FooterWrapper = () => {
    return (
        <footer className={cx(styles.footer)}>
            <DownloadApp />
            <CompanyInfo />
            <CicekInfo />
            <Copyright />

        </footer>
    )
}

export default FooterWrapper
