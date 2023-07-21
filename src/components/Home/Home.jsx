import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobCategory from "../JobCategory/JobCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="bg-white">
                <JobCategory></JobCategory>
            </div>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;