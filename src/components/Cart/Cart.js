import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = props => {

    const cartContext = useContext(CartContext);
    const totalAmount = `${Math.abs(cartContext.totalAmount.toFixed(2))} $`;

    const removeCartItemHandler = (id) =>{
        cartContext.removeItem(id);
    }
    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    }
    const cartItems = (
        <ul className={styles['cart-items']}>
            {
                cartContext.items.map(item => <CartItem
                    key={item.id}
                    item = {item}
                    onAdd = {addCartItemHandler.bind(null, item)}
                    onRemove={removeCartItemHandler.bind(null, item.id)}/>
                )
            }
        </ul>
    )
    if (cartContext.items.length === 0) { return <Modal onDisplayCart = {props.onDisplayCart}>
        <div className={styles.total}>
            <span>Ваша корзина пуста :( </span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onDisplayCart}>закрыть</button>
        </div>
    </Modal> }
    return <Modal onDisplayCart = {props.onDisplayCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onDisplayCart}>Закрыть</button>
            <button className={styles.button} disabled={true}>Заказать</button>
        </div>
    </Modal>
}
export default Cart