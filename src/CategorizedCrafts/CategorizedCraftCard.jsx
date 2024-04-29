import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CategorizedCraftCard = ({ data }) => {
  return (
   
      <div className="card  flex flex-col items-center  md:card-side bg-base-100 shadow-2xl my-2">
        <figure className=" md:w-2/4 px-4 lg:px-0 my-4">
          <img
            src={data.item_photo}
            alt="books"
            className="rounded-xl w-[300px] h-[300px]"
          />
        </figure>
        <div className=" md:w-2/4 px-4 justify-center ">
          <h2 className="card-title mb-2 mt-16">{data.item_name}</h2>
          <h2 className="text-lg font-medium mb-2">
            Category: {data.category}
          </h2>
          <h2 className="text-base font-medium mb-2">
            Processing Time: {data.item_processing_time}
          </h2>
          <p className="font-medium text-left text-base mb-3">
            {data.customization === "Yes" ? "Customizable" : "Not Customizable"}
          </p>
          <hr></hr>
          <p className="my-3">{
                data.item_description.length>150 ?
                 data.item_description.slice(0,150)
                 :data.item_description
            }....</p>
          <hr></hr>
          <div className="flex flex-row justify-start gap-2 md:gap-4 ">
            <button className="rounded-2xl text-[#328EFF] font-medium bg-[#328EFF26] md:py-2 md:px-3 py-1 px-2 md:mr-5 my-3">
              Price: {data.item_price} tk
            </button>
            <button className="rounded-2xl text-[#FFAC33] font-medium bg-[#FFAC3326]  md:px-3 md:py-2 py-1 px-2  my-3">
              Rating: {data.item_rating}
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <button className="btn bg-[#715329] text-white">
              <Link to={`/craft-details/${data._id}`}>View Details</Link>
            </button>
          </div>
        </div>
    </div>
  );
};

CategorizedCraftCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default CategorizedCraftCard;
