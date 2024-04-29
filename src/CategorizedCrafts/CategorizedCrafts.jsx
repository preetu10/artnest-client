import { useLoaderData, useParams } from "react-router-dom";
import CategorizedCraftCard from "./CategorizedCraftCard";

const CategorizedCrafts = () => {
    const category=useParams();
    const data=useLoaderData();
    //console.log(category,data);

    return (
        <div>
             <h1 className="text-center text-3xl font-bold mt-20 mb-5 text-[#715329]">
             Explore {category.category} Collection
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-4xl mx-auto ">
      Browse through our exquisite selection of {category.category}, each piece meticulously crafted to offer a unique artistic expression. 
      </p>
      <div className="grid grid-cols-1 px-2 gap-5">
        {
            data.map((d,idx)=><CategorizedCraftCard key={idx} data={d}></CategorizedCraftCard>)
        }
        </div>
      {

      }
        </div>
    );
};

export default CategorizedCrafts;