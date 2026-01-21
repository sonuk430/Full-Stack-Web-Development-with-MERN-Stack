// cerate a h1 element
// const element1 = document.createElement("h1");
// element1.textContent = "Welcome to React JS";
// element1.classList = "element";
// element1.id = "first";

// element1.style.fontSize = "30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "green";

// const element2 = document.createElement("h1");
// element2.textContent = "Welcome to Day-01";
// element2.classList = "element";
// element2.id = "second";

// element2.style.fontSize = "50px";
// element2.style.backgroundColor = "yellow";
// element2.style.color = "white";

const React = {
  createElement: function createElement(tag, attributes, children) {
    const element = document.createElement(tag);
    element.textContent = children;

    for (const key in attributes) {
      if (key === "style") {
        Object.assign(element.style, attributes.style);
      } else {
        element[key] = attributes[key];
      }
    }

    return element;
  },
};

const element1 = React.createElement(
  "h1",
  {
    className: "element",
    id: "first",
    style: { fontSize: "30px", backgroundColor: "orange", color: "Red" },
  },
  "Welcome React",
);
const element2 = React.createElement(
  "h1",
  {
    className: "element",
    id: "first",
    style: { fontSize: "50px", backgroundColor: "green", color: "white" },
  },
  "Welcome Day-01 React Js",
);

document.getElementById("root").append(element1);
document.getElementById("root").append(element2);
