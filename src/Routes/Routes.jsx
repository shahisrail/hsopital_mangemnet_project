import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import ServicesCard from "../Pages/Home/ServicesCard";  
import Login from "../Pages/Login/Login";
import Regestare from "../Pages/Login/Regestare";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Serviceroutes from "../Pages/ServiseRoutes/Serviceroutes";
import Error from "../Pages/Errorpage/Error";
import Appointment from "../Pages/Appointment/Appointment";
import Aboutus from "../Pages/About/Aboutus";
import Doctors from "../Pages/Doctors/Doctors";
import COntact from "../Pages/Contact/COntact";
import Pacages from "../Pages/Pacages/Pacages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/services",
        element: <Serviceroutes></Serviceroutes>,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
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

      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
        loader: () => fetch("/doctor.json"),
      },
      {
        path: "/about",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/Docotrs",
        element: <Doctors></Doctors>,
        loader: () => fetch("/doctor.json"),
      },
      {
        path: "/contact",
        element: <COntact></COntact>,
      },
      {
        path: "/pacage",
        element: <Pacages></Pacages>,
        loader: () => fetch("/Pacage.json"),
      },
    ],
  },
]);

export default routes;
