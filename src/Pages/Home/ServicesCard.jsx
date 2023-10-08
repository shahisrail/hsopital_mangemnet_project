import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ServicesCard = ({ services }) => {
  const { category, details, id, image } = services;
  return (
    <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1000">
      
      <div className="relative flex  px-2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-0 h-50 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="h-[230px]"
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {category}
          </h5>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {details.length > 100 ? (
            <p>
              {details.slice(0, 100)}
              <Link to={`/service/${id}`}>
                <button
                  className="select-none w-32 mx-auto md:ml-28 mt-4 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Details
                </button>
              </Link>
            </p>
          ) : (
            { details }
          )}
        </p>
        <div className="p-6 pt-0"></div>
      </div>
    </div>
  );
};

export default ServicesCard;