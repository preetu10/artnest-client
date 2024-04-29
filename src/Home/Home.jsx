import ArtCraftCategory from "./ArtCraftCategory";
import Banner from "./Banner";
import CraftsSection from "./CraftsSection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <CraftsSection></CraftsSection>
            <ArtCraftCategory></ArtCraftCategory>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;