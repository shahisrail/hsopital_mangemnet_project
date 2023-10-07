import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { id } = useParams();
  const aservice = service.find((aservice) => aservice.id == id);
  return (
    <div>
      {aservice ? (
        <>
          <h2 className="text-2xl">News details</h2>
           
          <p>{aservice.details}</p>
        </>
      ) : (
        <p>No news found for the selected ID.</p>
      )}
    </div>
  );
};

export default ServiceDetails;
