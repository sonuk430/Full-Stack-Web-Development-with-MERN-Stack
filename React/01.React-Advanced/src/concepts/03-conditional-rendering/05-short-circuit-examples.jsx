import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "Default value"}</h2>
      {/* {text && (
        <div>
          <h2>what</h2>
          <h2>{name}</h2>
        </div>
      )} */}
    </div>
  );
};

export default ShortCircuitExamples;
