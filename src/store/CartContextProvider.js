import {useReducer} from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items:[],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){

        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id;
        });

        let updatedItem;
        let updatedItems;

        if(existingCartItemIndex !== -1){

            updatedItem = {
                ...state.items[existingCartItemIndex],
                amount: state.items[existingCartItemIndex].amount + action.item.amount,
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else{
            updatedItem = {
                ...action.item
            }
            updatedItems = state.items.concat(updatedItem);
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.id;
        });

        if (existingCartItemIndex !== -1){
            const updatedTotalAmount = state.totalAmount - state.items[existingCartItemIndex].price;
            let updatedItems;
            if(state.items[existingCartItemIndex].amount === 1){
                updatedItems = state.items.filter(item => item.id !== action.id);
            } else {
                const updatedItem = {...state.items[existingCartItemIndex],
                    amount: state.items[existingCartItemIndex].amount -1}


                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount

            }
        }
    }
    return defaultCartState;
}
const CartContextProvider = props => {
    const [cartState, dispathCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = item => {
        dispathCartAction({
            type: 'ADD_ITEM',
            item: item
        });
    };
    const removeItemHandler = id => {
        dispathCartAction({
            type: 'REMOVE_ITEM',
            id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value = {cartContext}>{props.children}</CartContext.Provider>
}
export default CartContextProvider;