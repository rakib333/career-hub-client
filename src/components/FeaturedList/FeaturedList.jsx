import { faDollarSign, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import locationIcon from '../../assets/images/Icons/location.png';


const FeaturedList = ({ job }) => {

    const { id, img, job_location, job_time, job_title, job_type, company_name, salary } = job;

    return (
        <div className="border-[1px] border-[#E8E8E8] rounded-lg p-10">
            <img src={img} className="w-[120px] h-10" alt="" />
            <h2 className="text-[#474747] font-extrabold text-2xl mt-7">{job_title}</h2>
            <p className="text-[#757575] text-xl mt-2 font-thin">{company_name}</p>

            <div className="flex gap-5 my-4 ">
                <button className="border rounded-lg py-2 px-5 text-[#8C81FF] text-base ">
                    {job_type}
                </button>
                <button className="border rounded-lg py-2 px-5 text-[#8C81FF] text-base ">
                    {job_time}
                </button>
            </div>

            <div className="flex items-center gap-6 mb-5">
                <div className="flex items-center">
                    <span className="h-6 w-6 text-[#757575]">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </span>
                    <small>{job_location}</small>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon className="w-4 h-4 border-[2px] rounded-full text-[#757575]" icon={faDollarSign} />
                    <small className="ml-3">Salary: {salary}</small>
                </div>
            </div>

            {/* <button onClick={() => handleViewDetails(id)} className="py-[10px] text-white px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg">View Details</button> */}

            <Link to={`/jobDetail/${id}`} className="py-[10px] text-white px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg">Link Details</Link>


        </div>
    );
};

export default FeaturedList;