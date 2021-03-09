import { useState } from 'react'
import styles from './CategoryFilter.module.scss'
import MenuIcon from './../../images/menuicon.svg'
import cx from 'classnames'
const CategoryFilter = () => {
    const [categorys] = useState([
        {
            categorysName: 'Tüm Kategoriler',
            categorys: 0
        },
        {
            categorysName: 'Elektronik',
            categorys: 1
        },
        {
            categorysName: 'Ev ve Yaşam',
            categorys: 2
        },
        {
            categorysName: 'Evcil Hayvan',
            categorys: 3
        },
        {
            categorysName: 'Kitap',
            categorys: 4
        },
        {
            categorysName: 'Oyuncak',
            categorys: 5
        },
        {
            categorysName: 'Spor',
            categorys: 6
        },
        {
            categorysName: 'Çiçek (120)',
            categorys: 7
        },
        {
            categorysName: 'Hediye',
            categorys: 8
        },
        {
            categorysName: 'Moda, Aksesuar',
            categorys: 9
        },
        {
            categorysName: 'Ofis, Kırtasiye',
            categorys: 10
        },
        {
            categorysName: 'Parfüm',
            categorys: 11
        },
        {
            categorysName: 'Kişisel Bakım',
            categorys: 12
        },
        {
            categorysName: 'Petshop',
            categorys: 13
        },
    ])

    const [selected, setSelected] = useState({
        index: 0,
        categorysName: null
    })

    return (
        <div className="container mb-5">
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <img src={MenuIcon} alt="MenuIcon" className="mr-1" />
                    <p className="text-color-blue fs-24">Kategoriler</p>
                </div>
                <div className={styles.categorys}>

                    {

                        categorys.map((category, index) => (

                            <button key={index} onClick={() => setSelected({ index: index, categorysName: category.categorysName })} className={cx(styles.categoryButton, 'fs-13', index === selected.index ? cx('bg-color-blue text-color-white') : null)}><div>{category.categorysName}</div></button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter
