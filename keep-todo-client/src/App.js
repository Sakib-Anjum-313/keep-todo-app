
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import ActiveTodo from "./Pages/Home/Outlets/ActiveTodo.js";
import DoneTodo from "./Pages/Home/Outlets/DoneTodo";
import Todos from "./Pages/Home/Outlets/Todos";
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/register",
      element: <RegisterPage></RegisterPage>,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Home></Home>
        </PrivateRoute>
      ),
      children: [
        {
          path: "/",
          element: <Todos></Todos>,
        },
        {
          path: "/Home/activeTodo",
          element: <ActiveTodo></ActiveTodo>,
        },
        {
          path: "/Home/doneTodo",
          element: <DoneTodo></DoneTodo>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
