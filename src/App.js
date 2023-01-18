import Header from "./components/Layout/Header";
import FoodList from "./components/Food/FoodList";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
        <Cart/>
        <div className="wrapper">
            <Header/>
            <FoodList/>
        </div>
    </div>
  );
}

export default App;
