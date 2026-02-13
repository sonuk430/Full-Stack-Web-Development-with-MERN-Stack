import { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  // const [isDone, setIsDone] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => {
          removeItem(item.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default SingleItem;
