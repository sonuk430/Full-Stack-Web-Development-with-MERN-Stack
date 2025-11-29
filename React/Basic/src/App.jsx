import { Fragment } from "react";

const App = () => {
  const userName = "Sonu";
  const a = 12;
  const b = 10;

  const list = ["Ram", "Rohan", "Sita", "Gita"];

  const logIn = false;

  return (
    <Fragment>
      <h2>Welcome</h2>
      <h3>{userName}</h3>
      <h2>
        {a} + {b} = {a + b}
      </h2>
      <ul>
        {list.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>

      {logIn ? <h1>Login</h1> : <h1>LogOut</h1>}
    </Fragment>
  );
};

export default App;
