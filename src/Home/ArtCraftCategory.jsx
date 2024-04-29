import { useEffect, useState } from "react";
import Category from "./Category";

const ArtCraftCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/sub-category-detail")
      .then((res) => res.json())
      .then((data) => setCategory(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-20 mb-5 text-[#715329]">
        Discover Our Artistic Categories
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-4xl mx-auto ">
        Dive into our curated selection of art categories, from the serene
        strokes of landscape paintings to the vibrant layers of oil and
        watercolor. Each category offers a unique avenue for expression and
        discovery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-6 gap-4 px-4">
        {category.map((cat, idx) => (
          <Category key={idx} data={cat}></Category>
        ))}
      </div>
    </div>
  );
};

export default ArtCraftCategory;
