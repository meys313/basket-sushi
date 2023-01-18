import Header from "./components/Layout/Header";
import FoodList from "./components/Food/FoodList";
import Cart from "./components/Cart/Cart";
import {useState} from "react";

function App() {
    const [cartDisplay, setCartDisplay] = useState(false)
    const changeCartDisplayHandler = () => {
        setCartDisplay(prevState => !prevState)
    }

  return (
    <div className="App">
        {cartDisplay? <Cart onDisplayCart={changeCartDisplayHandler}/> : null}
        <div className="wrapper">
            <Header onDisplayCart={changeCartDisplayHandler} ex={setCartDisplay}/>
            <FoodList/>
        </div>
    </div>
  );
}

export default App;
