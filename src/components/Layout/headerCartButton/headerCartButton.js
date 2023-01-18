import CartIcon from "./CartIcon";
import styles from './headerCartButton.module.css'
const HeaderCartButton = props => {
    return(
        <button className={styles.button} onClick={props.onDisplayCart}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span className={styles.title}>
                Корзина
            </span>
            <span className={styles.badge}>
                1
            </span>
        </button>
    )
}

export default HeaderCartButton