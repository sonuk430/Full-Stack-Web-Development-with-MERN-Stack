import { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    // <section className="tours">
    <div className="tour-card">
      <div className="image-wrapper">
        <img src={image} alt={name} />
        <span className="price">{price}</span>
      </div>

      <h2>{name}</h2>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Show less" : " Read More"}
        </span>
      </p>
      <button
        onClick={() => {
          removeTour(id);
        }}
      >
        Not Interested
      </button>
    </div>
    // </section>
  );
};

export default Tour;
