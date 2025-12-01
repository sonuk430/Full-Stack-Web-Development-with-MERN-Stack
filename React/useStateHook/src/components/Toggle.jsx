import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <hr />
      <h2>Toggle Text</h2>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "Hide Text" : "Show Text"}
      </button>

      {toggle ? (
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          corrupti. Magni sed, nihil ex ipsa magnam deserunt quod quam fugiat.
        </h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Toggle;
