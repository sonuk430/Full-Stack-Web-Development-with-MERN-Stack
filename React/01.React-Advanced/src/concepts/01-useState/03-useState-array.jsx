import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // console.log(id);
    const filterArr = people.filter((el) => el.id !== id);
    setPeople(filterArr);
  };

  //   const clearAllItem = () => {
  //     setPeople([]);
  //   };

  return (
    <div>
      {people.map((el) => {
        return (
          <div key={el.id}>
            <h4>{el.name}</h4>
            <button
              type="button"
              onClick={() => {
                removeItem(el.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      {people.length > 0 && (
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All Item
        </button>
      )}
    </div>
  );
};

export default UseStateArray;
