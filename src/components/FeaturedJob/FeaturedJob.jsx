
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import FeaturedList from "../FeaturedList/FeaturedList";

export const DetailContext = createContext();


const FeaturedJob = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState([]);
    const sliced = allJobs.slice(0, 4);

    useEffect(() => {
        axios.get('jobDetails.json')
            .then(data => {
                setAllJobs(data.data)
            })
    }, [])

    const handleShowAllJobs = () => {
        const jobs = allJobs.map(job => job);
        setShowAllJobs(jobs)
    }




    return (
        <div id='featuredJob'>
            <div className='text-center mb-5'>
                <h2 className="text-[48px] font-extrabold mb-3 text-black">Featured Jobs</h2>
                <p className="text-[#757575] text-[17px] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="md:grid md:grid-cols-2 gap-6">
                {
                    sliced.map(j => <FeaturedList key={j.id} job={j}></FeaturedList>)
                }
                {
                    showAllJobs.map(j => <FeaturedList key={j.id} job={j}></FeaturedList>)
                }
            </div>


            <div className="text-center my-10">
                <button onClick={handleShowAllJobs} className="py-[10px] text-white px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg">Show All Jobs</button>
            </div>


        </div>
    );
};

export default FeaturedJob;