import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServicesCard from "./ServicesCard";
import { Helmet } from "react-helmet";


const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <h1 className="text-center text-3xl font-bold my-5">Our Services </h1> 
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServicesCard key={service.id} services={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
