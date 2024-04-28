import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateCraft = () => {
   
    const data=useLoaderData();
    console.log(data);
    const [category, setCategory] = useState(data.category);
    const [customization, setCustomization] = useState(data.customization);
    const [stockStatus, setStockStatus] = useState(data.stockStatus);
    const navigate = useNavigate();
    const handleUpdate=(e)=>{
        e.preventDefault();
        const item_name = e.target.item_name.value;
        const item_photo = e.target.item_photo.value;
        const item_price = e.target.item_price.value;
        const item_rating = e.target.item_rating.value;
        const item_description = e.target.item_description.value;
        const item_processing_time = e.target.item_processing_time.value;
        const name = data.name;
        const email = data.email;
        const item = {
          item_name,
          item_photo,
          item_description,
          item_processing_time,
          item_price,
          item_rating,
          name,
          email,
          category,
          customization,
          stockStatus,
        };
        console.log(item);
        fetch(`http://localhost:5000/update-craft/${data._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        })
          .then((res) => res.json)
          .then((data) => {
            console.log(data);
            toast.success("Updated successfully");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Failed to update. Try again later");
          });
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-medium mt-8 mb-5 text-[#715329]">
        Update Information of Your Craft
      </h1>
      <form onSubmit={handleUpdate} className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 items-stretch justify-center ">
          <div className="">
            <label className="label">
              <span className="label-text">Name of Your Item</span>
            </label>
            <input
              type="text"
              name="item_name"
              defaultValue={data.item_name}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Image of Your Item</span>
            </label>
            <input
              type="text"
              name="item_photo"
             defaultValue={data.item_photo}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Select Category of Your Item</span>
            </label>
            <select
              className="select select-bordered w-full "
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected>
                ---Category---
              </option>
              <option>Landscape Painting</option>
              <option>Portrait Drawing</option>
              <option>Watercolor Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price of Your Item</span>
            </label>
            <input
              type="number"
              name="item_price"
              defaultValue={data.item_price}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Rating of Your Item</span>
            </label>
            <input
              type="text"
              name="item_rating"
             defaultValue={data.item_rating}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Processing Time of Your Item</span>
            </label>
            <input
              type="text"
              name="item_processing_time"
             defaultValue={data.item_processing_time}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={data.email}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              className="input input-bordered w-full"
              disabled={true}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Is your item customizable?</span>
            </label>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="customization"
                  value="Yes"
                  className="radio"
                  onChange={(e) => setCustomization(e.target.value)}
                  checked={customization === "Yes"}
                />
                <p>Yes</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="customization"
                  value="No"
                  className="radio"
                  onChange={(e) => setCustomization(e.target.value)}
                  checked={customization === "No"}
                />
                <p>No</p>
              </div>
            </div>
          </div>

          <div className="">
            <label className="label">
              <span className="label-text">
                {" "}
                Select Stock Status of Your Item
              </span>
            </label>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="stockStatus"
                  value="In Stock"
                  className="radio"
                  onChange={(e) => setStockStatus(e.target.value)}
                  checked={stockStatus === "In Stock"}
                />
                <p>In Stock</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <input
                  type="radio"
                  name="stockStatus"
                  value="Made TO Order"
                  className="radio"
                  onChange={(e) => setStockStatus(e.target.value)}
                  checked={stockStatus === "Made TO Order"}
                />
                <p>Made To Order</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5 px-5">
          <label className="label">
            <span className="label-text">Description of Your Item</span>
          </label>
          <textarea
            name="item_description"
          defaultValue={data.item_description}
            className="textarea textarea-bordered textarea-md w-full "
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center mx-auto">
          <button
            type="submit"
            className="btn btn-ghost btn-wide my-5 text-center bg-[#715329] text-white text-lg"
            required
          >
            Update
          </button>
        </div>
      </form>
        </div>
    );
};

export default UpdateCraft;