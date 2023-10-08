import React from "react";

const Doctorscard = ({ doctor }) => {
  const { name, image, subjects } = doctor;
  return (
    <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1500">
      <div
        className="card 
       bg-base-100 h-full  shadow-xl"
      >
        <figure>
          <img className=" lg:h-[500px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <h2> {subjects} </h2>
        </div>
      </div>
    </div>
  );
};

export default Doctorscard;
