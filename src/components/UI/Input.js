import styles from './Input.module.css'
import React, {useState} from "react";




const Input = React.forwardRef(
    (props, ref) => {
        const [inputValue, setInputValue] = useState(1)
        const changeInputValueHandler = (action) =>{
            if(action === 'add'){
                setInputValue(prevState => prevState+1)
            } else if (action === 'del'){
                if(inputValue === 1){
                    return;
                }
                else{
                    setInputValue(prevState => prevState - 1)
                }
            }

        }

        return <div className={styles.input}>
            <label>
                <span>{props.label}</span>
                <input ref={ref} {...props.input} value={inputValue} readOnly={true}/>
                <div className={styles.arrows}>
                    <div className={styles.arrows__wrapper}>
                        <i className={`fa-solid fa-play ${styles.arrow}`}
                           onClick={() => {changeInputValueHandler("add")}}></i>
                        <i className={`fa-solid fa-play ${styles.arrow}`}
                           onClick={() => {changeInputValueHandler("del")}}></i>
                    </div>

                </div>

            </label>
        </div>
    }
)

export default Input;