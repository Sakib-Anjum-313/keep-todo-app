import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import TodoCard from "./TodoCard";

const DoneTodo = () => {
  const [doneTodos, setDoneTodo] = useState([]);
  const [allTodos, setAllTodos, reloadTodo, setReloadTodo] = useOutletContext();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/doneTodos/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside useEffect");
        setDoneTodo(data);
      });
  }, [reloadTodo]);

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
        {doneTodos?.map((todo, index) => (
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

export default DoneTodo;
