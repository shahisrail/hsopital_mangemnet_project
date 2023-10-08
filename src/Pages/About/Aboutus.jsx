import { Helmet } from "react-helmet";


const Aboutus = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      
      <div
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="hero h-screen"
        style={{
          backgroundImage: "url(https://i.imgur.com/zrsUBwG.jpg)",
        }}
      >
        <div className="hero bg-opacity-60"></div>
        <div
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="hero-content lg:-ml-[700px] mb-24 text-center text-neutral-content"
        >
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-5xl text-[#0E204D]  font-bold">
              Caring For The Health & Well Being Of Family.
            </h1>
            <p className="mb-5 text-[#0E204D]">
              Medcity has been present in Europe since 1990, offering innovative
              solutions, specializing in medical services for treatment of
              medical infrastructure.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-5 ">
        <h2 className="text-5xl">
          Improving The Quality Of Your <br /> Life Through Better Health.
        </h2>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="grid md:grid-cols-5 gap-3 mt-6 max-w-6xl mx-auto p-5"
      >
        <div className="col-span-2 ">
          <h2 className="text-[#0E204D] font-semibold">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and to be the first and best choice for healthcare.
          </h2>

          <p className="mt-5  font-medium">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. We are committed to being
            the region’s premier healthcare network providing patient centered
            care that inspires clinical and service excellence.
          </p>
        </div>
        <div className="col-span-3  ">
          <img
            className="rounded-3xl"
            src="https://i.imgur.com/1Hl65A7.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
