const Cart = () => {
  return (
    <div>
      <SubCart>
        <h1>Sub-Cart-01</h1>
        <p>This is content from SubCart-01</p>
      </SubCart>
    </div>
  );
};

export default Cart;

// SubCart Component

function SubCart(props) {
  return (
    <>
      <div>
        <h2>Accessing Children</h2>
        {props.children}
      </div>
    </>
  );
}
