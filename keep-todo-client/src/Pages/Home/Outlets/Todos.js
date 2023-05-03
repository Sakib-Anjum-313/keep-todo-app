import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider.js";
import TodoCard from "./TodoCard.js";

const Todos = () => {
  // console.log(allTodos);
  const { user } = useContext(AuthContext);

  const [allTodos, setAllTodos, reloadTodo, setReloadTodo] = useOutletContext();


  const toggleTodoDone = (id) => {
    console.log("toggled");
    fetch(`http://localhost:5000/toggleATodo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let prevTodos = [...allTodos];

        allTodos.forEach((prevtodo, index) => {
          if (prevtodo._id === id) {
            return prevTodos.splice(index, 1, data);
          }
        });

        setAllTodos(prevTodos);
        setReloadTodo(!reloadTodo);
        console.log(prevTodos);
        console.log(allTodos);
      });
  };

  return (
    <div className=" mt-6 relative left-64">
      <div className="flex flex-col">
        {allTodos?.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            toggleTodoDone={toggleTodoDone}
            reloadTodo={reloadTodo}
            setReloadTodo={setReloadTodo}
          ></TodoCard>
        ))}
      </div>
    </div>
  );
};

export default Todos;
