import styles from './FoodItemForm.module.css'
import Input from "../UI/Input";
import {useRef} from "react";
const FoodFormItem = props =>{

    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();

        const inputAmount = amountInputRef.current.value;
        if(inputAmount.trim().length === 0 || +inputAmount < 1){
            return;
        }
        props.onAddToCart(+inputAmount);

    }
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="кол-во" input={{type:"number", min:1, step:'1', defaultValue:1}}/>
            <button>Добавить</button>
        </form>
    )
}

export default FoodFormItem