import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </AuthProvider>
);
