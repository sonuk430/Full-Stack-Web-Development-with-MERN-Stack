// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }
//   return <InvalidPassword />;

//   return isValid ? <ValidPassword /> : <InvalidPassword />;
// };

// Cart Components

const Cart = () => {
  const items = ["WireLess Earbuds", "New SSD", "Haddie", "Phone"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

      <ul>
        <h2>Products</h2>

        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* <Password isValid={true} /> */}
      <Cart />
    </div>
  );
};

export default App;
