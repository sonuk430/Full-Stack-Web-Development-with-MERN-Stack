import Cart from "./components/Cart";
import Person from "./components/Person";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Person name="Sonu" age={28} />
      <Products product="Apple" price={20000} />
      <Cart />
    </div>
  );
};

export default App;
