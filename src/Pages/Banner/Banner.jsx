import "./Banner.css";

const Banner = () => {
  
  return (
    <div>
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item flex relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url('/public/h1_slider1.jpg')",
            }}
          >
            <div
              data-aos="fade-right"
              className="bg-opacity-60  text-neutral-content"
            >
              <div
                data-aos="fade-down-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="max-w-md   lg:relative lg:top-[10%] lg:right-[70%]"
              >
                <h1 className="mb-5  text-[#0E204D] md:text-5xl font-bold">
                  All Aspects Of Medical Practice
                </h1>
                <p className="mb-5 text-[#0E204D]">
                  The health and well-being of our partines and their helth care
                  team will always be our priroty so we follow the bset practice
                  f cleanlines
                </p>
                <div>
                  <div className="flex flex-wrap gap-5">
                    <img
                      className=" w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3"
                      src="https://i.imgur.com/b5CDHuD.png"
                      alt=""
                    />

                    <img
                      className=" w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3"
                      src="https://i.imgur.com/gjQNgiL.png"
                      alt=""
                    />
                    <img
                      className=" w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3"
                      src="https://i.imgur.com/un30fXE.png"
                      alt=""
                    />
                    <img
                      className=" w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3"
                      src="/public/service5.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item flex relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url('/public/h1_slider2.jpg')",
            }}
          >
            <div className="bg-opacity-60   text-neutral-content">
              <div className="max-w-md   mx-auto lg:relative lg:top-[20%] lg:right-[70%]">
                <h1 className="mb-5 text-[#0E204D] md:text-5xl font-bold">
                  Providing Best Medical Care
                </h1>
                <p className="mb-5 text-[#0E204D]">
                  The health and well-being of our partines and their helth care
                  team will always be our priroty so we follow the bset practice
                  f cleanlines
                </p>
                <div>
                  <div className="flex flex-wrap gap-5">
                    <img
                      className=" w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3 slide-up"
                      src="https://i.imgur.com/lgAiyj4.png"
                      alt=""
                    />
                    <img
                      className=" w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3 slide-up"
                      src="https://i.imgur.com/wDUbvNg.png"
                      alt=""
                    />
                    <img
                      className=" w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3 slide-up"
                      src="https://i.imgur.com/oemzbn9.png"
                      alt=""
                    />
                    <img
                      className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white p-3 slide-up"
                      src="https://i.imgur.com/lujonrM.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute   flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn  btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="   lg:w-[80%] relative  md:bottom-20 mx-auto "
      >
        <div className="  grid grid-cols-1 rounded-l-xl  p-1 md:grid-cols-3">
          <div className="relative flex  flex-row rounded-l-xl lg:flex-col  bg-[#65CDC0] text-white bg-clip-border  shadow-md">
            <div className="flex   ">
              <div>
                <h2 className="mt-8 p-5">
                  <img
                    src="https://i.imgur.com/6BK22ka.png"
                    alt="Emergency Image"
                  />
                </h2>
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Emergency Cases
                </h5>
                <p className="block font-sans text-xl font-light leading-relaxed text-inherit antialiased">
                  Please feel free to contact our friendly reception staff with
                  any general or medical enquiry.
                </p>
                <p className="block mt-5 font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  01061245741
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex   flex-col  bg-[#3851A3] bg-clip-border text-white shadow-md">
            <div className="flex  ">
              <div>
                <h2 className="mt-8 p-5"></h2>
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Doctors Timetable
                </h5>
                <p className="block font-sans text-xl font-light leading-relaxed text-inherit antialiased">
                  Qualified doctors available six days a week, view our
                  timetable to make an appointment.
                </p>
                <p className="block mt-5 rounded-lg font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  View Timetable
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex rounded-r-xl  flex-col  bg-[#2D4990] bg-clip-border text-white shadow-md">
            <div className="flex  ">
              <div>
                <h2 className="mt-8 p-5"></h2>
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Opening Hours
                </h5>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
