import React, { Component } from 'react'

//Assets
import gift from './images/gift.png'
import motor from './images/motor.png'
import school from './images/school.png'

//Components
import HeaderWrapper from './components/header/headerWrapper/HeaderWrapper'
import FooterWrapper from './components/footer/FooterWrapper/FooterWrapper'
import PromotionCard from './components/promotionCard/PromotionCard'
import Breadcrumb from './components/BreadCrumb/Breadcrumb'
import Banner from './components/Banner/Banner'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'
import Products from './components/Products/Products'

//Context
import { ProductProvider } from './context/ProductContext'
import { BasketProvider } from './context/BasketContext'

class App extends Component {

    state = {
        promotions: [
            {
                img: motor,
                info: '75 TL Üzerine Teslimat Ücreti Bizden',
                boxColor: 'pink',
                buttonMessage: 'Detaylı Bilgi'
            },
            {
                img: gift,
                info: 'Hediye Kategorisi için Sepette %15 İndirim',
                boxColor: 'light-blue',
                buttonMessage: 'Hediye Ürünleri'
            },
            {
                img: school,
                info: 'Kırtasiye Kategorisi için Sepette %15 İndirim',
                boxColor: 'green',
                buttonMessage: 'Detaylı Bilgi'
            },
        ],
        breadcrumb: [
            'Ciceksepeti Market',
            'İstanbul',
            'CiceksepetiBreadCrumb'
        ]
    }

    render() {
        const { promotions, breadcrumb } = this.state

        return (
            <ProductProvider>
                <BasketProvider>
                    <div>
                        <HeaderWrapper />
                        <Banner />
                        <Breadcrumb breadcrumb={breadcrumb} />
                        <CategoryFilter />
                        <Products />
                        <div className="promotion-section container d-flex justify-content-between ">

                            {
                                promotions.map((promotion, index) => (
                                    <PromotionCard promotion={promotion} key={index} />
                                ))
                            }
                        </div>
                        <FooterWrapper />
                    </div>
                </BasketProvider>
            </ProductProvider>
        )
    }
}


export default App