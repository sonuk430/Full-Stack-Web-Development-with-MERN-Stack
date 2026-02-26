import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import customFetch from "./utils";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { mutate: createTasks, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
  });

  const handleSubmit = (e) => {
    e.preventDefault(e);
    createTasks(newItemName);
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
        <div type="submit" className="btn" disabled={isLoading}>
          Add Item
        </div>
      </div>
    </form>
  );
};

export default Form;
