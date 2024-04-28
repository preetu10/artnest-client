/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllArtCraft = () => {
    const data=useLoaderData();
    console.log(data);
    const [crafts,setCrafts]=useState(data);
    return (
        <div>
            <h1 className="text-center text-3xl font-medium mt-3 mb-5 text-[#715329]">
        Arts and Crafts
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-8 max-w-4xl mx-auto ">
      Discover the extraordinary collection of ArtNest where each piece is a testament to the power of imagination and skilled craftsmanship.
      </p>
          <div className="overflow-x-auto text-center mx-auto">
  <table className="table mx-auto">
    {/* head */}
    <thead>
      <tr className="text-base text-center">
        <th>Serial No</th>
        <th>Name of Item</th>
        <th>Category Name</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Sold By</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        crafts.map((craft,idx)=>{
            return(
                <tr key={idx} className="text-base hover text-center">
                <th>{idx+1}</th>
                <td>{craft.item_name}</td>
                <td>{craft.category}</td>
                <td>{craft.item_price}</td>
                <td>{craft.item_rating}</td>
                <td>{craft.name}</td>
                <td><button className="btn bg-[#715329] text-white"><Link to={`/craft-details/${craft._id}`}>View Details</Link></button></td>
              </tr>
            )
        })
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllArtCraft;