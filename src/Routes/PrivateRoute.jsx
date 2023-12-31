import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const  loactoin  = useLocation()
  if (loading) {
    return (
      <h2 className="flex justify-center items-center min-h-[60vh]">
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </h2>
    );
  }
    if (user) {
      return children;
    }
  return <Navigate state={loactoin.pathname} to='/login'></Navigate>
  
};

export default PrivateRoute;