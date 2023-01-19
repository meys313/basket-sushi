import CartIcon from "./CartIcon";
import styles from './headerCartButton.module.css';
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = props => {
    const cartContext = useContext(CartContext)
    const cartItemsLength = cartContext.items.reduce((currentValue, item)=>{
        return currentValue + item.amount
    }, 0)
    return(
        <button className={styles.button} onClick={props.onDisplayCart}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span className={styles.title}>
                Корзина
            </span>
            <span className={styles.badge}>
                {cartItemsLength}
            </span>
        </button>
    )
}

export default HeaderCartButton