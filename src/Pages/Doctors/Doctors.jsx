import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DoctorsCard from './Doctorscard';

const Doctors = () => {
  const doctor = useLoaderData()
  console.log(doctor);
  return (
    <div>
      <h3 className="text-center text-4xl mt-5">Our Doctors </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4  lg:p-20">
        {doctor.map((doctors) => (
          <DoctorsCard key={doctors.id} doctor={doctors}></DoctorsCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;