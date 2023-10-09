import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { id } = useParams();
  const aservice = service.find((aservice) => aservice.id == id);
  return (
    <div>
      {aservice ? (
        <>
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="hero"
            style={{ backgroundImage: `url(${aservice.image})` }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div className="hero mx-auto -ml-2   md:-ml-[400px] md:mt-10 md:relative top-10 md:w-[600px] bg-base-200 rounded-2xl">
                <div className="  ">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={aservice.image}
                      className="max-w-sm mx-auto rounded-lg w-[200px] shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold text-[#0E204D]">
                        {aservice.category}
                      </h1>
                      <p className="py-6 text-[#0E204D]">{aservice.details}</p>
                    </div>
                  </div>
                  <div>
                    <p className=" font-semibold  ml-4 text-[#0E204D] p-10 -mt-10">
                      We conduct a range of tests to help us work out why you're
                      not feeling well and determine the right treatment for
                      you.
                    </p>
                    <p className=" font-semibold  ml-4 text-[#0E204D] p-10 -mt-16">
                      Our expert doctors, nurses and allied health professionals
                      manage patients with a broad range of medical issues.
                    </p>
                    <p className="font-bold text-black text-2xl">price: {aservice.price} </p>
                  </div>
                  <Link to="/appointment">
                    <button className="btn m-3 bg-[#62C8BA] font-bold hover:bg-[#0E204D] text-white ">
                      Make Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:max-w-6xl grid   md:grid-cols-5  gap-2 mx-auto ">
            <div
              data-aos="flip-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="col-span-3"
            >
              <h2 className="text-3xl ml-5 md:ml-0    font-bold mt-20 ">
                overview
              </h2>
              <p className="mt-5 ml-5 md:ml-0">{aservice.details}</p>

              <p className="mt-5  ml-5 md:ml-0"> {aservice.overview} </p>
              <div className="mt-10">
                <img src={aservice.image} alt="" />
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="col-span-2 text-center p-5 mt-20 "
            >
              <div
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="border rounded-xl bg-[#DDF7F5] p-5"
              >
                <h2>our department</h2>
                <p className="border rounded-3xl text-2xl text-white mt-5 p-3 bg-[#65CCBF]">
                  Neurology
                </p>
                <p className="border rounded-3xl text-2xl text-white mt-5 p-3 bg-[#65CCBF]">
                  Cardiology
                </p>
                <p className="border rounded-3xl text-2xl text-white mt-5 p-3 bg-[#65CCBF]">
                  Pathology
                </p>
                <p className="border rounded-3xl text-2xl text-white mt-5 p-3 bg-[#65CCBF]">
                  Ophthalmology
                </p>
                <p className="border rounded-3xl text-2xl text-white mt-5 p-3 bg-[#65CCBF]">
                  Dermatology
                </p>
                <p className="border rounded-3xl text-2xl text-white mt-5 p-3 bg-[#65CCBF]">
                  Orthopedics
                </p>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="border rounded-3xl p-10 bg-[#F4F4F4] mt-5"
              >
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  <div className="flex  mt-2">
                    <h2>Saturday</h2>
                    <h2 className="ml-8">9.00 – 8.00 pm</h2>
                  </div>
                  <hr className="mt-2 border-gray-400" />

                  <div className="flex  mt-2">
                    <h2>Sunday</h2>
                    <h2 className="ml-8">10.00 – 9.00 pm</h2>
                  </div>
                  <hr className="mt-2 border-gray-400" />

                  <div className="flex  mt-2">
                    <h2>Monday – Friday</h2>
                    <h2 className="ml-8">8.00 – 7:00 pm</h2>
                  </div>
                  <hr className="mt-2 border-gray-400" />

                  <div className="flex  mt-2">
                    <h2>Emergency</h2>
                    <h2 className="ml-8">24HR / 7Days</h2>
                  </div>
                </p>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="   rounded-3xl p-10 mt-5"
                style={{
                  backgroundImage: 'url("/public/Doctor_02.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="p-6      ">
                  <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Emergency Cases
                  </h5>
                  <p className="block font-semibold font-sans text-xl   leading-relaxed  antialiased ">
                    Please feel free to contact our friendly reception staff
                    with any general or medical enquiry.
                  </p>
                  <p className="block mt-5 font-sans text-base  leading-relaxed font-semibold antialiased">
                    01061245741
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No news found for the selected ID.</p>
      )}
    </div>
  );
};

export default ServiceDetails;
