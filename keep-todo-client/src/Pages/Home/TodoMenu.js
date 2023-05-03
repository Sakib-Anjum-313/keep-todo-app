import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const TodoMenu = ({ pendingTodos, reloadTodo, setReloadTodo }) => {
  const [allTodoActive, setAllTodoActive] = useState(true);
  const [activeTodo, setActiveTodo] = useState(false);
  const [doneTodo, setDoneTodo] = useState(false);
  const { user } = useContext(AuthContext);

  const handleRemoveDoneTodo = () => {
    fetch(`http://localhost:5000/removeDoneTodos/${user.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReloadTodo(!reloadTodo);
      });
  };

  return (
    <div className=" mt-4 relative left-64 ">
      <h1> {pendingTodos} pending Todos...</h1>

      <div className="flex justify-between w-2/4 mt-4">
        <div>
          <Link
            onClick={() => {
              setAllTodoActive(true);
              setActiveTodo(false);
              setDoneTodo(false);
            }}
            to={"/"}
          >
            <button
              className={
                allTodoActive
                  ? "btn-active btn btn-sm  rounded-md btn-outline btn-info"
                  : "btn btn-sm  rounded-md btn-outline btn-info "
              }
            >
              All Todos
            </button>
          </Link>

          <Link
            onClick={() => {
              setAllTodoActive(false);
              setActiveTodo(true);
              setDoneTodo(false);
            }}
            to={"/Home/activeTodo"}
          >
            <button
              className={
                activeTodo
                  ? "btn-active btn btn-sm ml-1 rounded-md btn-outline btn-warning"
                  : " btn btn-sm ml-1 rounded-md btn-outline btn-warning"
              }
            >
              Active Todos
            </button>
          </Link>
          <Link
            onClick={() => {
              setAllTodoActive(false);
              setActiveTodo(false);
              setDoneTodo(true);
            }}
            to={"/Home/doneTodo"}
          >
            <button
              className={
                doneTodo
                  ? "btn-active btn btn-sm ml-1 rounded-md btn-outline btn-success"
                  : "btn btn-sm ml-1 rounded-md btn-outline btn-success"
              }
            >
              Done Todos
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default TodoMenu;
