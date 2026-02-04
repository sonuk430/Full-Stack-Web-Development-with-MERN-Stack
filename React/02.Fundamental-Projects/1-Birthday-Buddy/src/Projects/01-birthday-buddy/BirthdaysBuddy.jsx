import { useState } from "react";
import "./birthdaysBuddy.css";
import data from "./data";

const BirthdaysBuddy = () => {
  const [user, setUser] = useState(data);

  const handleClear = () => {
    console.log("hello");
    setUser([]);
  };

  return (
    <div className="b-wrapper">
      <h2>{user.length} birthdays today</h2>
      <Birth user={user} handleClear={handleClear} />
    </div>
  );
};

export default BirthdaysBuddy;

//  BirthDataBody Components

const Birth = ({ user, handleClear }) => {
  console.log(user);

  return (
    <>
      {user.map((el) => (
        <div key={el.id}>
          <div>
            <img src={el.image} width={"50px"} />
          </div>
          <div>
            <h2>{el.name}</h2>
            <p>{el.age}</p>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          handleClear();
        }}
      >
        Clear all
      </button>
    </>
  );
};
