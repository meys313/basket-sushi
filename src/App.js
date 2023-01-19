import Header from "./components/Layout/Header";
import FoodList from "./components/Food/FoodList";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartContextProvider from "./store/CartContextProvider";


function App() {
    const [cartDisplay, setCartDisplay] = useState(false)
    const changeCartDisplayHandler = () => {
        setCartDisplay(prevState => !prevState)
    }

  return (
    <div className="App">
        <CartContextProvider>
            {cartDisplay? <Cart onDisplayCart={changeCartDisplayHandler}/> : null}
            <div className="wrapper">
                <Header onDisplayCart={changeCartDisplayHandler} ex={setCartDisplay}/>
                <FoodList/>
            </div>
        </CartContextProvider>
    </div>
  );
}

export default App;
