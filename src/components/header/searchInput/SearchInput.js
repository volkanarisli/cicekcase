import { useContext } from 'react'



import styles from './SearchInput.module.scss'
import '../../../styles/main.scss'
import searchIcon from '../../../images/search-icon.svg'
import cx from 'classnames'


import { ProductContext } from '../../../context/ProductContext'


import { InputGroup, FormControl } from 'react-bootstrap';


const SearchInput = () => {
    const [products, updateProducts] = useContext(ProductContext)

    const onChange = ({ target: { value } }) => {
        if (value.length > 2) {

            updateProducts(value)
        } else {
            updateProducts()
        }
    }

    return (
        <InputGroup>
            <div className="w-100">
                <FormControl

                    placeholder="Ürün Ara"
                    aria-label="Ürün Ara"
                    aria-describedby="search-input"
                    onChange={onChange}
                />
                <div className={styles.searchIcon}>
                    <img src={searchIcon} alt="search" />

                </div>
                <button className={cx('button', styles.absoluteButton)}>
                    Ara
                </button>
            </div>

        </InputGroup>
    )
}

export default SearchInput
