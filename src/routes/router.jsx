import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Error from "../Error";
import Home from "../Home/Home";
import Login from "../Login";
import Register from "../Register";
import About from "../About";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/about",
            element:<About></About>
        }
      ],
    },
  ]);
  export default router;