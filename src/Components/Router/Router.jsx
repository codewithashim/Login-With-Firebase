import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default route;
