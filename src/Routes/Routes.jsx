import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import ServicesCard from "../Pages/Home/ServicesCard";
import Login from "../Pages/Login/Login";
import Regestare from "../Pages/Login/Regestare";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/services",
        element: <ServicesCard></ServicesCard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regetare",
        element: <Regestare></Regestare>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default routes;