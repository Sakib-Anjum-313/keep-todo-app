import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = () => {
  const [text, setText] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newToDoValue = form.newToDo.value;
    setText(newToDoValue);

    console.log(newToDoValue);
    form.reset();
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className=" mt-4 relative top-36">
      <form
        onSubmit={onFormSubmit}
        className="flex justify-center items-center "
      >
        <input
          onChange={onInputChange}
          name="newToDo"
          type="text"
          placeholder="Enter A New Todo..."
          className="input input-bordered input-warning w-full max-w-xs drop-shadow-md "
        />
      </form>
      <h1>{text}</h1>
    </div>
  );
};

export default ToDoForm;
