import express from "express";
import {
    activeTodo,
    addNewTodo,
    deleteTodo,
    doneTodo,
    getAllTodos,
    toggleTodoDone,
    updateTodo
} from "../controller/todo-controller.js";

const route = express.Router();

//POST 
route.post("/addNewTodo/:email", addNewTodo);

// PUT
route.put("/editedTodo/:id", updateTodo);

// GET
route.get("/getAllTodos/:email", getAllTodos);
route.get("/toggleATodo/:id", toggleTodoDone);
route.get("/activeTodos/:email", activeTodo);
route.get("/doneTodos/:email", doneTodo);

//DELETE
route.delete("/deleteTodo/:id", deleteTodo);

// route.delete("/removeDoneTodos/:email", removeDoneTodos);


export default route;
