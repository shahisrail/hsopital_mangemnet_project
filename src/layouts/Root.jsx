import { Outlet } from "react-router-dom";
import Nav from "../Pages/Home/Navbar/Nav";
import Fotter from "../Pages/Footter/Fotter";


const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Root;