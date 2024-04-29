import { useEffect, useState } from "react";
import Craft from "./Craft";

const CraftsSection = () => {
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch("https://artnest-server-mahfujas-projects.vercel.app/get-all-crafts")
      .then((res) => res.json())
      .then((data) => setCrafts(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-3 mb-5 text-[#715329]">
        Community Crafted
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-4xl mx-auto ">
        Discover the passion and creativity of artists from around the world in
        our community-curated collection.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {crafts.map((craft, idx) => (
          <Craft key={idx} data={craft}></Craft>
        ))}
      </div>
    </div>
  );
};

export default CraftsSection;
