import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { ItemDetails } from "../components/ItemDetails";
import AddItem from "../pages/AddITem";
import About from "../pages/About";
import ItemsPage from "../components/Items";
import ProtectedRoute from "./ProtectedRoutes";
import Features from "../components/Features";
import ManageItems from "../pages/ManageItem";
import UpdateItem from "../components/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/item/:id",
        element: <ProtectedRoute><ItemDetails /></ProtectedRoute>,
      },
      {
        path: "/add-item",
        element: <ProtectedRoute><AddItem /></ProtectedRoute>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skills",
        element: <ItemsPage/>
      },
      {
        path: "/features",
        element: <Features/>
      },
      {
        path: "/manage-items",
        element: <ProtectedRoute><ManageItems/></ProtectedRoute>
      },
      {
        path: "/edit-item/:id",
        element: <ProtectedRoute><UpdateItem/></ProtectedRoute>
      }

    ],
  },
]);
