import { useState } from 'react'
import styles from './CompanyInfo.module.scss'
import cx from 'classnames'

import logo from '../../../images/logo.svg'
import facebook from '../../../images/facebook.svg'
import twitter from '../../../images/twitter.svg'
import instagram from '../../../images/instagram.svg'
import youtube from '../../../images/youtube.svg'
import hangouts from '../../../images/hangouts.svg'

const CompanyInfo = () => {
    const [logos] = useState([
        {
            platform: facebook,
            link: ''
        },
        {
            platform: twitter,
            link: ''
        },
        {
            platform: instagram,
            link: ''
        },
        {
            platform: youtube,
            link: ''
        },
        {
            platform: hangouts,
            link: ''
        }
    ])
    const [infos] = useState([
        {
            title: 'Faydalı Bilgiler',
            subLinks: [
                'Çiçek Bakımı',
                'Çiçek Eşliğinde Notlar',
                'Çiçek Anlamları',
                'Özel Günler',
                'Mevsimlere Göre Çiçekler',
                'BonnyFood Saklama Koşulları',
                'Site Haritası'
            ]
        },
        {
            title: 'Kurumsal',
            subLinks: [
                'Hakkımızda',
                'Kariyer',
                'ÇiçekSepeti’nde Satış Yap',
                'Kurumsal Müşterilerimiz',
                'Reklamlarımız',
                'Basında Biz',
                'Kampanyalar',
                'Vizyonumuz'
            ]
        },
        {
            title: 'İletişim',
            subLinks: [
                'Bize Ulaşın',
                'Sıkça Sorulan Sorular',

            ]
        },
        {
            title: 'Gizlilik Sözleşmesi',
            subLinks: [
                'Mesafeli Satış Sözleşmesi',
                'Bilgi Toplumu Hizmetleri',
                'Gizlilik Sözleşmesi',
                'Ödeme Seçenekleri',
                'Hesap Bilgileri',

            ]
        }

    ])


    return (
        <div className="container mt-5 mb-5 d-flex">
            <div>
                <img height='30' src={logo} alt='Logo' className="mb-3" />
                <div className="d-flex mb-3">
                    {

                        logos.map((logo, index) => <img height='27' src={logo.platform} alt='Logo' className="mr-4" key={index} />)

                    }

                </div>
                <p className={cx(styles.info, 'fs-15')} >
                    CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan ulaşabilirsiniz.
                </p>

            </div>

            <span className="divider ml-3 mr-3" />
            <div className="d-flex justify-content-around">
                {




                    infos.map((info, index) => (
                        <div className="m-2" key={index}>
                            <p className="fs-18 text-color-blue mb-2">{info.title}</p>
                            <div className="d-flex flex-column">
                                {
                                    info.subLinks.map((link, i) => <p className="fs-15 mb-2" key={i}>{link}</p>)
                                }
                            </div>

                        </div>
                    ))


                }

            </div>
        </div>
    )
}

export default CompanyInfo
