import styles from './SearchInput.module.scss'
import '../../../styles/main.scss'
import searchIcon from '../../../images/search-icon.svg'
import cx from 'classnames'


import { InputGroup, FormControl } from 'react-bootstrap';


const SearchInput = () => {
    return (
        <InputGroup>
            <div className="w-100">
                <FormControl

                    placeholder="Ürün Ara"
                    aria-label="Ürün Ara"
                    aria-describedby="search-input"

                />
                <div className={styles.searchIcon}>
                    <img src={searchIcon} alt="search"/>

                </div>
                <button className={cx('searchButton',styles.absoluteButton)}>
                    Ara
                </button>
            </div>
         
        </InputGroup>
    )
}

export default SearchInput
