import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root";
import Error from "../Error";
import Home from "../Home/Home";
import Login from "../Login";
import Register from "../Register";
import About from "../About";
import AllArtCraft from "../AllArtCraft/AllArtCraft";
import MyCrafts from "../MyCrafts/MyCrafts";
import AddCraft from "../AddCraft/AddCraft";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Profile/Profile";
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
        },
        {
          path:"/all-arts-crafts",
          element:<AllArtCraft></AllArtCraft>
        },
        {
          path:"/my-art-crafts/:email",
          element:<PrivateRoutes><MyCrafts></MyCrafts></PrivateRoutes>
        },
        {
          path:"/add-crafts/:email",
          element:<PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
        },
        {
          path:"/user-profile/:name",
          element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
        }
      ],
    },
  ]);
  export default router;