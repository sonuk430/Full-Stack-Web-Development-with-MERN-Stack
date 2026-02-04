import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [lists, setLists] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLists([...lists, user]);
    console.log(lists);

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email..."
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password..."
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      {/*  Render */}

      {lists.map((el) => {
        return (
          <div key={el.name}>
            <span>{el.name} -</span>
            <span>{el.email} -</span>
            <span>{el.password} </span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
