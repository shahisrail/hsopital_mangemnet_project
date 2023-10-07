import { useContext } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

  //  contest  c
  const { signin } = useContext(AuthContext)
  const nagigate = useNavigate() 
  const loactoin = useLocation()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signin(email, password)
      .then(() => {
        // Login was successful
          Swal.fire({
            icon: "success",
            title: "wow great compleate your login",
           
          });
        // user navigate
        nagigate(location?.state ? loactoin.state : "/");
      })
      .catch((error) => {
        // An error occurred during login
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message, 
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });

 
  };

  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <div>
        <h2 className="text-3xl text-center"> please login</h2>
        <form onSubmit={handleLogin} className="md:3w-3/4 mx-auto lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-5">
          Do not have an account
          <Link className="text-blue-600 font-bold" to="/regetare">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};


export default Login;
