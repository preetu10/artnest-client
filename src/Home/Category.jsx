import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Category = ({ data }) => {
    const navigate=useNavigate();

    const handleCategory = (category) =>{
        navigate(`/categorized-crafts/${category}`);
    }

  return (
    <div onClick={()=>{handleCategory(data.name)}}>
      <div className="card lg:card-side items-center py-4 bg-base-100 shadow-2xl shadow-[#715329] lg:h-[270px]">
        <figure className="w-1/2">
          <img src={data.image} alt="category" className="w-[240px] h-[240px] rounded-xl" />
        </figure>
        <div className=" py-4 my-auto  w-1/2">
          <h2 className="card-title antialiased hover:subpixel-antialiased">{data.name}</h2>
          <p className="text-sm pr-3 antialiased hover:subpixel-antialiased">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Category;
