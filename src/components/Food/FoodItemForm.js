import styles from './FoodItemForm.module.css'
import Input from "../UI/Input";

const FoodFormItem = props =>{
    return(
        <form className={styles.form}>
            <Input label="кол-во" input={{type:"number", min:1, step:'1', defaultValue:1}}/>
            <button>Добавить</button>
        </form>
    )
}

export default FoodFormItem