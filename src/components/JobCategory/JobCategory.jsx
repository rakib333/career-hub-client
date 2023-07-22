import axios from "axios";
import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";


const JobCategory = () => {

    const [jobCategories, setJobCategories] = useState([]);

    useEffect(() => {
        axios.get('JobCategory.json')
            .then(data => {
                const loadedJobCategory = data.data;
                setJobCategories(loadedJobCategory)
            })
    }, [])
    return (
        <div className="bg-white">
            <div className="text-center mt-32">
                <h2 className="text-[45px] text-[#1A1919] font-extrabold leading-normal">Job Category List</h2>
                <p className="text-[#757575] text-[17px] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="lg:mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    jobCategories.map(jobCategory => <CategoryList
                        key={jobCategory.id}
                        jobCategory={jobCategory}
                    ></CategoryList>)
                }
            </div>
        </div>
    );
};

export default JobCategory;