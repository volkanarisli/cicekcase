import styles from './DownloadApp.module.scss'
import appmockup from '../../../images/appmockup.png'
import qrcode from '../../../images/qrcode.png'
import ios from '../../../images/ios.svg'
import android from '../../../images/android.svg'

import cx from 'classnames'
const DownloadApp = () => {
    return (
        <div className={cx(styles.downloadApp, 'container')}>
            <img className={styles.mockup} src={appmockup} alt="appmockup" />
            
            <div className={styles.download}>
                <div className="d-flex mb-2">
                    <img src={qrcode} alt="qrcode" className="mr-3" />
                    <div className="d-flex flex-column">
                        <h2 className="fs-18 bold">Çiçek Sepeti Mobil Uygulamayı İndirin</h2>
                        <p className="fs-16">Mobil Uygulamayı QR Kod ile İndirin.</p>
                    </div>
                </div>
                <div>
                    <img src={ios} alt="ios" className="mr-3" />
                    <img src={android} alt="android" />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
