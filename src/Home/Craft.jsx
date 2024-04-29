import PropTypes from "prop-types";
import { FaBangladeshiTakaSign, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Craft = ({ data }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl shadow-[#715329]">
        <figure className="px-8 pt-10">
          <img src={data.item_photo} alt="craft" className="rounded-xl h-[270px] w-[300px]" />
        </figure>
        <div className="card-body  justify-between text-left">
          <h2 className="card-title pl-5 text-[#5f4726] ">{data.item_name} 
          <div className="badge badge-outline text-[#5f4726] text-base ml-16 px-4 py-4 "><FaStar className="mr-1"></FaStar> {data.item_rating}</div>
          </h2>
          <p className="text-left px-5 text-[#5f4726]">Category: {data.category}</p>
          <p className="text-left px-5 text-[#5f4726]">{data.stockStatus}</p>
         
          <div className="card-actions items-center justify-between my-2 px-5">
            <div className="badge badge-outline text-[#5f4726] text-base px-4 py-4 mr-4"><FaBangladeshiTakaSign className="mr-1" /> {data.item_price}</div>
            <button className="btn bg-[#715329] text-white">
              <Link to={`/craft-details/${data._id}`}>View Details</Link>
            </button>
          </div>
          <div className="card-actions">
           
          </div>
        </div>
      </div>
    </div>
  );
};

Craft.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Craft;
