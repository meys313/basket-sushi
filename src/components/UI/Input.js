import styles from './Input.module.css'

const Input = props => {
    return <div className={styles.input}>
        <label>
            <span>{props.label}</span>
            <input {...props.input}/>
        </label>
    </div>
}

export default Input;