import ArtCraftCategory from "./ArtCraftCategory";
import Banner from "./Banner";
import CraftsSection from "./CraftsSection";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <CraftsSection></CraftsSection>
            <ArtCraftCategory></ArtCraftCategory>
        </div>
    );
};

export default Home;