import Header from "./components/Layout/Header";
import FoodList from "./components/Food/FoodList";
function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <FoodList/>
        </div>
    </div>
  );
}

export default App;
