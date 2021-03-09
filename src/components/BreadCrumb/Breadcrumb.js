import PropTypes from 'prop-types'
import cx from 'classnames'
const Breadcrumb = ({ breadcrumb }) => {

    return (
        <div className="container d-flex">
            {
                breadcrumb.map((item, index) => (
                    <p className={cx(index === breadcrumb.length - 1 ? 'text-color-green' : 'text-color-light-black', 'mr-1')} key={index}>{item} {index !== breadcrumb.length - 1 && <span>&#62;</span>} </p>
                ))
            }
        </div>
    )
}
Breadcrumb.prototype = {
    promotion: PropTypes.object.isRequired
}
export default Breadcrumb
