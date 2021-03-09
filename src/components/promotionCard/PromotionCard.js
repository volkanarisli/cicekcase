import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './PromotionCard.module.scss'

const PromotionCard = ({ promotion }) => {
    const { img, info, buttonMessage, boxColor } = promotion
    return (
        <div className={cx(styles.card, `bg-color-${boxColor}`)}>
            <img width="167" height="130"src={img} alt="img" className="mr-3" />
            <div>
                <p className="fs-16 text-color-light-black font-weight-light mb-2">{info}</p>
                <button className="button bg-color-white text-color-red">{buttonMessage}</button>
            </div>
        </div>
    )


}
PromotionCard.prototype = {
    promotion: PropTypes.object.isRequired
}


export default PromotionCard
