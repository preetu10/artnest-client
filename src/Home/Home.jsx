import ArtCraftCategory from "./ArtCraftCategory";
import Banner from "./Banner";
import CraftsSection from "./CraftsSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "./Testimonial";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        document.title="ArtNest"
      },[]);
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <CraftsSection></CraftsSection>
            <ArtCraftCategory></ArtCraftCategory>
            <WhyChooseUs></WhyChooseUs>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;