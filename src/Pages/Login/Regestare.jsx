import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {  updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Regestare = () => {
  // use context
  const { user,setUser, createUser, signinWithGoogle } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
  const handelresgtare = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    
    console.log(name, photo, email, password);

    // create user

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      Swal.fire({
        icon: "error",
        title:
          "Minimum Six characters, at least one letter, one number and one special character",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, { displayName: name, photoURL: photo }).then(() => {
           // regetare was successful
        Swal.fire({
          icon: "success",
          title: "wow great complete your regestratoin",
        });
        setUser({ ...user, displayName: name, photoURL: photo });
        navigate(location?.state ? location.state : "/");
        })

      })
      .catch((error) => {
        // An error occurred during regestare
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then(() => {
        // regetare was successful
        
        Swal.fire({
          icon: "success",
          title: "wow great complete your regestratoin",
        });
         navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // An error occurred during regestare
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div
      className="w-1/2 mx-auto shadow-lg rounded-3xl my-5 mt-5"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <Helmet>
        <title>Registare</title>
      </Helmet>
      <div>
        <h2 className="text-3xl text-center mt-16"> please Registare</h2>
        <form onSubmit={handelresgtare} className="md:3w-3/4  mx-auto lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              type="name"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo url</span>
            </label>
            <input
              type="text"
              placeholder="Photo url"
              name="photo"
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
            <button className="btn btn-primary">Registare</button>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleGoogleLogin}
              className="mx-auto w-[100px]  rounded-full h-[100px]"
            >
              <img src="https://i.imgur.com/2q4LyIJ.jpg" alt="" />
            </button>
          </div>
        </form>
        <p className="text-center mt-5">
          Alredy Have an account
          <Link className="text-blue-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regestare;
