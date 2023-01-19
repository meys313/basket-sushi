import classes from './FoodItem.module.css'
import FoodItemForm from "./FoodItemForm";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
const FoodItem = props => {
    const cartContext = useContext(CartContext);
    const food = props.food
    const addToCartHandler = (amount) =>{
        cartContext.addItem({
            id: food.id,
            name: food.name,
            amount: amount,
            price: food.price
        });
    };
    return(

        <li className={classes["food-item"]}>
            <div className={classes.content}>
                <h3>{food.name}</h3>
                <p className={classes.description}>{food.description}</p>
                <div className={classes.price}>{`${food.price} $`}</div>
            </div>
            <FoodItemForm onAddToCart={addToCartHandler}/>
        </li>
    )
}

export default FoodItem