import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";
import FilteredJob from "../FilteredJob/FilteredJob";
import logo from '../../assets/images/All Images/Vector.png'
import './Appliedfilter.css'


const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const [allData, setAllData] = useState([]);
    const [onsite, setOnsite] = useState([]);
    const [remote, setRemote] = useState([]);

    useEffect(() => {
        const localStoredData = getShoppingCart();
        const savedJob = [];
        for (let id in localStoredData) {
            const findId = allJobs.find(job => job.id === parseInt(id))
            if (findId) {
                savedJob.push(findId)
            }

        }
        setAllData(savedJob)
        setOnsite(savedJob)
        setRemote(savedJob)

    }, [allJobs])


    const handleRemoteData = () => {
        const getRemoteData = remote.filter(r => r.job_type === 'Remote')
        setAllData(getRemoteData)
    }

    const handleOnsiteData = () => {
        const onsiteData = onsite.filter(o => o.job_type === 'Onsite');
        setAllData(onsiteData)
    }
    return (
        <div>
            <div>
                <div className="bg-[#F9F9FF]">
                    <div className="relative pb-[180px]">
                        <img className="w-[300px] h-[200px] absolute left-0" src={logo} alt="" />
                        <h3 className="text-center text-2xl font-extrabold">Applied jobs</h3>
                    </div>
                </div>


                {/* <div className="applied-filter wrapper">
                    <select className="mt-6 border-2">
                        <option value="">Filter By</option>
                        <option value="">Onsite</option>
                        <option value="">Remote</option>
                    </select>
                </div> */}

                <div className='flex justify-center mt-10 gap-5'>
                    <button onClick={handleRemoteData} className='bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 rounded text-white'>Remote Jobs</button>
                    <button onClick={handleOnsiteData} className='bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 rounded text-white'>Onsite Jobs</button>
                </div>
            </div>
            <div className="wrapper">
                {
                    allData.map(job => <FilteredJob key={job.id} job={job}></FilteredJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;