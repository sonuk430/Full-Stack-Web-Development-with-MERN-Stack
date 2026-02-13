import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (!newItemName) return toast.error("Please Provide Value");
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
        />
        <div type="submit" className="btn">
          Add Item
        </div>
      </div>
    </form>
  );
};

export default Form;
