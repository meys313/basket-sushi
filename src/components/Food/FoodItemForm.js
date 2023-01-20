import styles from './FoodItemForm.module.css'
import Input from "../UI/Input";
import {useEffect, useRef, useState} from "react";
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
    const [buttonAnim, setButtonAnim] = useState(Boolean);
    const [buttonClick, setButtonClick] = useState({})
    useEffect(()=>{
        const timer = setTimeout(()=> {setButtonAnim(prevState => !prevState)}, 200)
        setButtonAnim(prevState => !prevState)

        return()=>{ clearTimeout(timer)}
    }, [buttonClick])

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="кол-во" input={{type:"number", min:1, step:'1', value:1}}/>
            <button className={`${buttonAnim? styles.active: ""}`} onClick={()=>setButtonClick({})}>Добавить</button>
        </form>
    )
}

export default FoodFormItem