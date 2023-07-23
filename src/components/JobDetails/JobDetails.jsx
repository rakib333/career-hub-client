import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from '../../assets/images/All Images/Vector.png'
// import logo1 from '../../assets/images/All Images/Vector-1.png'
import dollar from '../../assets/images/Icons/dollar.png';
import frame from '../../assets/images/Icons/Frame-1.png';
import phoneNbr from '../../assets/images/Icons/phone.png';
import mail from '../../assets/images/Icons/email.png';
import location from '../../assets/images/Icons/location.png';


const JobDetails = () => {
    const paramsId = useParams();

    const [jobs, setJob] = useState([])

    useEffect(() => {
        axios.get('jobDetails.json')
            .then(data => {
                setJob(data.data)
            })
    }, [])

    if (jobs.length < 1) {
        return
    }

    const clickedId = parseInt(paramsId.id);
    const getClickedData = jobs.find(job => job.id === clickedId);
    console.log('clicked', getClickedData)
    const { job_description, job_responsibility, educational_requirement, experience, salary, job_title, phone, email, address } = getClickedData;

    return (
        <div className="mb-10">
            <div className="bg-[#F9F9FF]">
                <div className="relative pb-[180px]">
                    <img className="w-[300px] h-[200px] absolute left-0" src={logo} alt="" />
                    {/* <img className="w-[300px] h-[200px] absolute right-[-50px] bottom-[70px]" src={logo1} alt="" /> */}
                    <h3 className="text-center">Job Details</h3>
                </div>
            </div>
            <div className="pt-[100px] wrapper lg:flex gap-7">
                <div className="lg:w-2/3 ml-4">
                    <h2 className="font-extrabold text-lg mb-4">Job Description: <span className="font-light text-base">{job_description}</span></h2>
                    <h2 className="font-extrabold text-lg mb-4">Job responsibility: <span className="font-light text-base">{job_responsibility}</span></h2>
                    <h2 className="font-extrabold text-lg mb-4">Job requirements : <br /> <span className="font-light text-base">{educational_requirement}</span></h2>
                    <h2 className="font-extrabold text-lg mb-4">Experiences : <br /> <span className="font-light text-base">{experience}</span></h2>
                </div>
                <div className="lg:w-[30%] ml-4">
                    <div className="p-7 bg-[#F3F2FF] rounded-lg">
                        <div>
                            <h3 className="text-black text-xl font-extrabold mb-6">Job Details</h3>
                            <hr className="border-1 border-[#9873FF]" />
                            <div className="flex mt-4 mb-1">
                                <img className="h-6 w-6 mr-2" src={dollar} alt="" />
                                <h2 className="text-xl font-bold">Salary: <span className="font-thin text-base"> {salary} (per month)</span></h2>
                            </div>
                            <div className="flex">
                                <img className="h-6 w-6 mr-2" src={frame} alt="" />
                                <h2 className="text-xl font-bold">Job title : <span className="font-thin text-base"> {job_title}</span></h2>
                            </div>
                        </div>
                        <div className=" mt-5">
                            <h3 className="text-black text-xl font-extrabold mb-6">Contact Information</h3>
                            <hr className="border-1 mb-5 border-[#9873FF]" />
                            <div className="flex mb-1">
                                <img className="h-6 w-6 mr-2" src={phoneNbr} alt="" />
                                <h2 className="text-xl font-bold">Phone: <span className="font-thin text-base"> {phone}</span></h2>
                            </div>
                            <div className="flex mb-1">
                                <img className="h-6 w-6 mr-2" src={mail} alt="" />
                                <h2 className="text-xl font-bold">Email : <span className="font-thin text-base"> {email}</span></h2>
                            </div>
                            <div className="flex">
                                <img className="h-6 w-6 mr-2" src={location} alt="" />
                                <h2 className="text-xl font-bold">Address : <span className="font-thin text-base"> {address}</span></h2>
                            </div>
                        </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-5 w-full rounded-lg mt-4 text-center text-white font-semibold">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;