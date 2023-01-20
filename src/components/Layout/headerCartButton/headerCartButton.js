import CartIcon from "./CartIcon";
import styles from './headerCartButton.module.css';
import {useContext,useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = props => {
    const [buttonIsAnimated, setButtonIsAnimated] = useState(false);
    const [countClick, setCountClick] = useState(0);
    const cartContext = useContext(CartContext)
    const cartItemsLength = cartContext.items.reduce((currentValue, item)=>{
        return currentValue + item.amount
    }, 0)

    // const buttonClasses = `${styles.button} ${buttonIsAnimated? styles.bump: ''} ${countClick>=2? styles.double: ''}`;
    const buttonClasses = `${styles.button} ${countClick>=2? styles.double: buttonIsAnimated ? styles.bump: ''}`;

    useEffect(()=> {

        if(cartContext.items.length === 0){
            return;
        }
        else {setCountClick(prevState => prevState+1)}

        const timer = setTimeout(()=> {setButtonIsAnimated(prevState => !prevState)}, 300)

        setButtonIsAnimated(prevState => !prevState)


        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])

    useEffect(()=>{
            const timer = setTimeout(()=>{setCountClick(0); setButtonIsAnimated(false)}, 300);
            return () => {
                clearTimeout(timer)
            }

        }, [countClick])

    return(
        <button className={buttonClasses} onClick={props.onDisplayCart}>
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