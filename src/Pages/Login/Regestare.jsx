
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Regestare = () => {
  // use context 
 const { createUser } = useContext(AuthContext);
 
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
    createUser(email, password)
      .then(() => {
        // regestare was successful
        alert("regestare  successful");
      })
      .catch((error) => {
        // An error occurred during logout
        alert("regestare  failed. Error: " + error.message);
      });
  };
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <div>
        <h2 className="text-3xl text-center"> please Registare</h2>
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
