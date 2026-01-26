import { useState } from "react";

const UseStateBasics = () => {
  //   console.log(useState(1));
  //   const value1 = useState("hello")[0];
  //   const value2 = useState("fun")[1];
  //   console.log(value1, value2);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You Clicked {count}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Clicked
      </button>
    </div>
  );
};

export default UseStateBasics;
