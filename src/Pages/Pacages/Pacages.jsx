
import { useLoaderData } from "react-router-dom";
import PacageCard from "./PacageCard";

const Pacages = () => {
  const pacage = useLoaderData();
  console.log(pacage);
  return (
    <div>
      {pacage.map((pcag) => (
        <PacageCard key={pcag.id} pacage={pcag} />
      ))}
    </div>
  );
};

export default Pacages;
