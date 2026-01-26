import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "Reading Books",
  });

  //   const [name, setName] = useState("peter");
  //   const [age, setAge] = useState(20);
  //   const [hobby, setHobby] = useState("read books");

  const displayPerson = () => {
    // setPerson({ name: "john", age: 28, hobby: "Coking" });
    // setPerson("test");
    // setPerson({ name: "sonu" });
    setPerson({ ...person, name: "sonu" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show User
      </button>
    </>
  );
};

export default UseStateObject;
