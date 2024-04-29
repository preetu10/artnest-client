import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ViewCraft = () => {
    const data=useLoaderData();
    useEffect(() => {
      document.title=`ArtNest-${data.item_name}`
    },[data]);
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="card bg-base-100 shadow-3xl">
        <figure>
          <img
            src={data.item_photo}
            alt="Crafts"
            className="rounded-xl h-[500px] px-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#5f4726]">
            {data.item_name}
          </h2>
         <p className="font-medium text-[#5f4726] text-lg">Category: {data.category}</p>
         <p className="font-medium text-[#5f4726] text-lg">Processing Time: {data.item_processing_time}</p>
          <p className="text-[#5f4726] text-left text-lg mb-3">
                  {
                    data.customization==="Yes"?"Customizable":"Not Customizable"
                  }
                  </p>
                  <p className="font-medium text-[#5f4726] text-lg">Sold By: {data.name}</p>  
          <p>{data.item_description}</p>
          <div className="card-actions justify-start mt-2">
            <div className="badge badge-outline text-[#5f4726] text-lg px-4 py-4 ">Price: {data.item_price}</div>
            <div className="badge badge-outline text-[#5f4726] text-lg px-4 py-4 ">Rating: {data.item_rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCraft;
