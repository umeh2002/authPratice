import { createBrowserRouter } from "react-router-dom";
import Register from "../Auth/Register";
import SignIn from "../Auth/SignIn";
import Layout from "../Common/Layout";
import Home from "../Pages/Home";
import Landing from "../Pages/Landing";
import PrivateRouter from "./PrivateRouter";

export const mainRouter = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },{
    path:"/home" ,
    element:<PrivateRouter>
         <Landing/>
    </PrivateRouter>
   
  }
]);
