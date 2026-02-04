import { useState } from "react";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    console.log(num);
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  // console.log(people.length - 1);
  const nextPeople = () => {
    setIndex((prev) => {
      return checkNumber(prev + 1);
    });
  };
  // const nextPeople = () => {
  //   setIndex((prev) => {
  //     if (prev === people.length - 1) {
  //       return 0;
  //     }
  //     return prev + 1;
  //   });
  // };

  const prevPeople = () => {
    setIndex((prev) => {
      return checkNumber(prev - 1);
    });
  };
  // const prevPeople = () => {
  //   setIndex((prev) => {
  //     console.log(prev);
  //     if (prev === 0) {
  //       return people.length - 1;
  //     }
  //     return prev - 1;
  //   });
  // };

  return (
    <section>
      <div>
        <img src={image} alt={name} width={"250px"} />
        <h2>{name}</h2>
        <h3>{job}</h3>
        <p>{text}</p>

        <h1 style={{ cursor: "pointer" }} onClick={nextPeople}>
          ⏭
        </h1>
        <h1 style={{ cursor: "pointer" }} onClick={prevPeople}>
          ⏮
        </h1>
      </div>
    </section>
  );
};

export default App;
