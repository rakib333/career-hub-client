import { faDollarSign, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import locationIcon from '../../assets/images/Icons/location.png';


const FeaturedList = ({ job }) => {

    const { img, job_location, job_time, job_title, job_type, company_name, salary } = job;

    return (
        <div className="border-[1px] border-[#E8E8E8] rounded-lg p-10">
            <img src={img} className="w-[120px] h-10" alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>

            <div className="flex gap-5">
                <button className="border rounded-lg py-2 px-5 text-[#8C81FF] text-base ">{job_type}</button>
                <button className="border rounded-lg py-2 px-5 text-[#8C81FF] text-base ">{job_time}</button>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center">
                    <span className="h-6 w-6 text-[#757575]">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </span>
                    <small>{job_location}</small>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon className="w-4 h-4 text-[#757575]" icon={faDollarSign} />
                    <small>Salary: {salary}</small>
                </div>
            </div>


        </div>
    );
};

export default FeaturedList;