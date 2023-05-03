import { faDeleteLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const TodoCard = ({ todo, toggleTodoDone, reloadTodo, setReloadTodo }) => {
  const [editing, setEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.data);
  const { user } = useContext(AuthContext);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setEditing(!editing);
    fetch(`http://localhost:5000/editedTodo/${todo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ todoText }),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          setReloadTodo(!reloadTodo);
      });
    };

    const deleteTodo = () => {
        fetch(`http://localhost:5000/deleteTodo/${todo._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setReloadTodo(!reloadTodo);
          });
    }
    



  return (
    <button className=" no-animation btn text-start mt-2 w-2/4 rounded-md btn-active btn-ghost">
      <div className="flex justify-between  w-full">
        <div
          className="w-full"
          onClick={() => {
            toggleTodoDone(todo._id);
          }}
        >
          <span
            style={{ display: editing ? "none" : "block" }}
            className={todo.done === true ? "line-through" : ""}
          >
            {todo.data}
          </span>

          <form
            onSubmit={onFormSubmit}
            style={{ display: editing ? "inline" : "none" }}
          >
            <input
              className="border-b-2 text-start w-2/4 h-full  bg-transparent"
              type="text"
              value={todoText}
              onChange={(event) => setTodoText(event.target.value)}
            />
          </form>
        </div>
        <div className="flex items-center justify-center">
          <div onClick={deleteTodo} className=" hover:text-amber-400 ">
            <FontAwesomeIcon icon={faDeleteLeft} size="xl" />
          </div>
          <div
            onClick={() => setEditing(!editing)}
            className="ml-4 hover:text-amber-400 "
          >
            <FontAwesomeIcon className="" icon={faPenToSquare} size="xl" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default TodoCard;
