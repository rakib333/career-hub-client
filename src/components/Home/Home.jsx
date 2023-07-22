import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobCategory from "../JobCategory/JobCategory";


const Home = () => {
    return (
        <div className="full-wrapper">
            <div className="bg-[#F9F9FF]">
                <div className="wrapper">
                    <Banner></Banner>
                </div>
            </div>
            <div className="wrapper">
                <JobCategory></JobCategory>
                <FeaturedJob></FeaturedJob>
            </div>
        </div>
    );
};

export default Home;