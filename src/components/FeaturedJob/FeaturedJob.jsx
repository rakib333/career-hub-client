import { useLoaderData } from "react-router-dom";
// import FeaturedList from "../FeaturedList/FeaturedList";


const FeaturedJob = () => {
    const allJobs = useLoaderData();
    console.log(allJobs)
    return (
        <div id='featuredJob'>
            <div className='text-center'>
                <h2>FeaturedJob</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {/* {
                    allJobs.map(job => console.log(job))
                } */}
            </div>
        </div>
    );
};

export default FeaturedJob;