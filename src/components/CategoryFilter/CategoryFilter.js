import { useState, useContext } from 'react'
import styles from './CategoryFilter.module.scss'
import MenuIcon from './../../images/menuicon.svg'
import cx from 'classnames'


import { ProductContext } from './../../context/ProductContext'

const CategoryFilter = () => {

    const [products, updateProducts] = useContext(ProductContext)


    const [categorys] = useState([
        {
            categorysName: 'Tüm Kategoriler',
            categoryId: 0
        },
        {
            categorysName: 'Elektronik',
            categoryId: 1
        },
        {
            categorysName: 'Ev ve Yaşam',
            categoryId: 2
        },
        {
            categorysName: 'Evcil Hayvan',
            categoryId: 3
        },
        {
            categorysName: 'Kitap',
            categoryId: 4
        },
        {
            categorysName: 'Oyuncak',
            categoryId: 5
        },
        {
            categorysName: 'Spor',
            categoryId: 6
        },
        {
            categorysName: 'Çiçek (120)',
            categoryId: 7
        },
        {
            categorysName: 'Hediye',
            categoryId: 8
        },
        {
            categorysName: 'Moda, Aksesuar',
            categoryId: 9
        },
        {
            categorysName: 'Ofis, Kırtasiye',
            categoryId: 10
        },
        {
            categorysName: 'Parfüm',
            categoryId: 11
        },
        {
            categorysName: 'Kişisel Bakım',
            categoryId: 12
        },
        {
            categorysName: 'Petshop',
            categoryId: 13
        },
    ])

    const [selected, setSelected] = useState({
        index: 0,
        categorysName: null
    })

    const updateSelected = (category, index) => {
        const { categoryId, categorysName } = category
        
        setSelected({ index, categorysName })
        updateProducts(null, categoryId)

    }

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

                            <button key={index} onClick={() => updateSelected(category, index)} className={cx(styles.categoryButton, 'fs-13', index === selected.index ? cx('bg-color-blue text-color-white') : null)}><div>{category.categorysName}</div></button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter
