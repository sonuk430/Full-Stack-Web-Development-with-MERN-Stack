import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("");

  return (
    <div>
      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4>Falsy AND : {text && "hello world"}</h4>
      <h4>Truthy OR : {name || "hello world"}</h4>
      <h4>Truthy OR : {name && "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
