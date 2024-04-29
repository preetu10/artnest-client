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
import UpdateCraft from "../UpdateCraft/UpdateCraft";
import ViewCraft from "../ViewCraft/ViewCraft";
import CategorizedCrafts from "../CategorizedCrafts/CategorizedCrafts";
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
          element:<AllArtCraft></AllArtCraft>,
          loader:()=>fetch("http://localhost:5000/get-all-crafts")
        },
        {
          path:"/my-arts-crafts/:email",
          element:<PrivateRoutes><MyCrafts></MyCrafts></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/get-my-crafts/${params.email}`),
          
        },
        {
          path:"/add-crafts/:email",
          element:<PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
        },
        {
          path:"/user-profile/:name",
          element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path:"/update-craft/:id",
          element:<PrivateRoutes><UpdateCraft></UpdateCraft></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/craft-view/${params.id}`)
        },
        {
          path:"/craft-details/:id",
          element:<PrivateRoutes><ViewCraft></ViewCraft></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/craft-view/${params.id}`)
        },
        {
          path:"/categorized-crafts/:category",
          element:<CategorizedCrafts></CategorizedCrafts>,
          loader:({params})=>fetch(`http://localhost:5000/category-crafts/${params.category}`)

        }
      ],
    },
  ]);
  export default router;