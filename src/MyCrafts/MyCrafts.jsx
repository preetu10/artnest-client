import {  useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyCrafts = () => {

  const data = useLoaderData();
  const [crafts, setCrafts] = useState(data);
  const [displayCrafts, setDisplayCrafts] = useState(crafts);
  console.log(crafts);
  useEffect(() => {
    setDisplayCrafts(crafts); // Update displayCrafts whenever crafts changes
  }, [crafts]);

  const handleDelete=(id)=>{
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/delete-craft/${id}`,{
                method: "DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                   toast.success("Deleted successfully");
                   const remaining=crafts.filter(craft =>craft._id !== id);
                   setCrafts(remaining);
                   setDisplayCrafts(remaining);
                }
            })
        }
      });
  }

  const handleFilter=(value)=>{
    let filteredCrafts=[];
    if(value==="Yes"){
        filteredCrafts=[...crafts].filter(craft=>craft.customization==="Yes");
        setDisplayCrafts(filteredCrafts);
    }else{
        filteredCrafts=[...crafts].filter(craft=>craft.customization==="No");
        setDisplayCrafts(filteredCrafts);
    }
  }


  return (
    <div>
      <h1 className="text-center text-3xl font-medium mt-3 mb-5 text-[#715329]">
        My Arts and Crafts
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-8 max-w-4xl mx-auto ">
        This collection is a curated showcase of handcrafted artistry, where
        every item tells a story of inspiration and dedication.
      </p>
      <div className="text-right mb-8">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-base bg-[#715329] text-white   rounded-lg font-medium"
          >
            Filter by Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  text-base z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>handleFilter("Yes")}>
              <a>Yes</a>
            </li>
            <li onClick={()=>handleFilter("No")}>
              <a>No</a>
            </li>
          </ul>
        </div>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
     {displayCrafts.map((craft, index) => {
        return (
          <div key={index}>
            <div className="card  flex flex-col md:card-side bg-base-100 shadow-2xl my-2">
              <figure className=" w-1/2  my-4">
                <img
                  src={craft.item_photo}
                  alt="books"
                  className="rounded-xl w-[240px] h-[240px]"
                />
              </figure>
              <div className=" w-1/2 justify-center ">
            <div className="flex flex-row justify-end">
            <button className="rounded-full text-[#328EFF] font-medium bg-[#328EFF26] px-2 md:px-5 py-3 md:mx-5 my-3 ">
                 {craft.stockStatus}
                  </button>
            </div>
            
              <h2 className="card-title mb-2">{craft.item_name}</h2>
                  <p className="text-[#131313CC] text-left text-lg mb-3">
                  {
                    craft.customization==="Yes"?"Customizable":"Not Customizable"
                  }
                  </p>
                <hr></hr>
                <div className="flex flex-col md:flex-row justify-start gap-2 md:gap-4 ">
                  <button className="rounded-2xl text-[#328EFF] font-base bg-[#328EFF26] md:py-2 md:px-3 py-1 px-2 md:mr-5 my-3">
                    Price: {craft.item_price} tk
                  </button>
                  <button className="rounded-2xl text-[#FFAC33] font-base bg-[#FFAC3326]  md:px-3 md:py-2 py-1 px-2  my-3">
                    Rating: {craft.item_rating}
                  </button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <button className="btn btn-accent text-white "><Link to={`/update-craft/${craft._id}`}>Update</Link></button>
                    <button onClick={()=>handleDelete(craft._id)} className="btn btn-error text-white">Delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default MyCrafts;
