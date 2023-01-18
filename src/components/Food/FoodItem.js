import classes from './FoodItem.module.css'
import FoodItemForm from "./FoodItemForm";
const FoodItem = props => {
    const food = props.food
    return(

        <li className={classes["food-item"]}>
            <div className={classes.content}>
                <h3>{food.name}</h3>
                <p className={classes.description}>{food.description}</p>
                <div className={classes.price}>{`${food.price} $`}</div>
            </div>
            <FoodItemForm/>
        </li>
    )
}

export default FoodItem