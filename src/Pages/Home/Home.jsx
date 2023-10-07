import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServicesCard from "./ServicesCard";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServicesCard key={service.id} services={service} />
        ))}
      </div>
     
    </div>
  );
};

export default Home;
