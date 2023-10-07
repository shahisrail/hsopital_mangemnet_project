import { Link } from "react-router-dom";


const ServicesCard = ({ services }) => {
  const { category, details,id } = services;
  return (
    <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"> 
      <div  className="relative flex  h-[500px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-0 h-50 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {category}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {
              details.length > 100 ? <p> {details.slice(0, 100)} <Link to={`/service/${id}`}>
              <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button>
              </Link> </p>
                :{details}
            }
          </p>
        </div>
        <div className="p-6 pt-0">
          
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;