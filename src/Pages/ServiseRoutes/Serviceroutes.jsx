import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../Home/ServicesCard';

const Serviceroutes = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div> 
      <h2 className='text-center text-3xl  mt-5 my-5'>Our servisec</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServicesCard key={service.id} services={service} />
        ))}
      </div>
    </div>
  );
};

export default Serviceroutes;