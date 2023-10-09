import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signin, signinWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signin(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Sign-in Successful",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-in Failed",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div
      className=" md:w-1/2 p-3 mx-auto shadow-lg rounded-3xl"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <Helmet> 
        <title>Login</title>
      </Helmet> 
      <div>
        <h2 className="text-3xl text-center mt-24 md:mt-20 lg:mt-16">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 mx-auto lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
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
              placeholder="Password"
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
        <div className="form-control mt-6">
          <button
            onClick={handleGoogleLogin}
            className="mx-auto w-[100px]  rounded-full h-[100px]"
          >
            <img src="https://i.imgur.com/2q4LyIJ.jpg" alt="" />
          </button>
        </div>
        <p className="text-center mt-5">
          Dont have an account?
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
