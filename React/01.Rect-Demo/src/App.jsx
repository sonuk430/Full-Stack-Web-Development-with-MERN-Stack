import { useState } from "react";

const App = () => {
  const [friend, setFriend] = useState(["Sonu", "Kumar"]);

  const addNewFriend = () => {
    setFriend([...friend, "Bulbul"]);
  };
  const removeFriend = () => {
    setFriend(friend.filter((f) => f !== "Kumar"));
  };

  return (
    <div>
      <ul>
        {friend.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>

      <button onClick={addNewFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Add New Friend</button>
    </div>
  );
};

export default App;
