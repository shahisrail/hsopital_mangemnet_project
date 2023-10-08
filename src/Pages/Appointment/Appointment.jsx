import React from "react";
import { Link } from "react-router-dom";
import Doctors from "../Doctors/Doctors";

const Appointment = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.imgur.com/8H71va0.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="hero-content text-center text-neutral-content"
        >
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Improve Quality Of Life Through Better Health.
            </h1>
            <p className="mb-5">
              Medcity has been present in Europe since 1990, offering innovative
              solutions, specializing in medical services for treatment of me
            </p>
            <Link to="/Docotrs">
              <button className="btn btn-primary">Find A Doctor</button>
            </Link>
          </div>
        </div>
      </div>
      <Doctors></Doctors>

      <div className="p-5 bg-base-100 shadow-xl w-10/12 mx-auto flex rounded-3xl -mt-10">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="card"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">Book An Appointment</h2>
            Please feel welcome to contact our friendly reception staff with any
            general or medical enquiry. Our doctors will receive or return any
            urgent calls.
            <div className="grid grid-cols-2 gap-4">
              <input
                className="border rounded-3xl text-center p-2"
                type="text"
                placeholder="Name"
              />
              <input
                className="border rounded-3xl text-center p-2"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                className="border rounded-3xl text-center p-2"
                type="number"
                name="number"
                id="number"
                placeholder="Number"
              />
              <input
                className="border rounded-3xl text-center p-2"
                type="date"
                name="date"
                id="date"
                placeholder="Date"
              />
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Appointment confirm</button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="p-5 border bg-[#65CCC0] mx-auto text-white rounded-3xl"
        >
          <h5 className="mb-2 block ml-10 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Emergency Cases
          </h5>
          <p className="block font-sans ml-10 text-xl font-light leading-relaxed text-inherit antialiased">
            Please feel free to contact our friendly staff with any medical
            enquiry
          </p>
          <p className="ml-10">Emergency Line: (002) 01061245741</p>
          <p className="ml-10">Location: Brooklyn, New York, USA</p>
          <p className="ml-10">Mon - Fri: 8:00 am - 7:00 pm</p>
          <p className="block mt-5 font-sans ml-10 text-base font-light leading-relaxed text-inherit antialiased">
            01061245741
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
