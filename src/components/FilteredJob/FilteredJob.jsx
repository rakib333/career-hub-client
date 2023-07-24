import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const FilteredJob = ({ job }) => {
    const { id, img, job_title, company_name, job_type, job_time, salary, job_location } = job;
    console.log(job)
    return (
        <div className=' border grid grid-cols-1 md:grid-cols-2 items-center rounded-md my-5 py-6  px-5'>
            <div className='  flex flex-col  md:flex-row items-center gap-5 py-2'>
                <img className='w-[250px] md:w-2/5 ' src={img} alt="" />
                <div className='space-y-3'>
                    <h1 className='text-2xl font-semibold'>{job_title}</h1>
                    <p>{company_name}</p>
                    <div className='flex items-center gap-2'>
                        <p className='border-2 border-violet-500 text-violet-600 w-max px-3 rounded-md py-1'>{job_type}</p>
                        <p className='border-2 border-violet-500 text-violet-600 w-max px-2 rounded-md py-1'>{job_time}</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='inline-flex items-center gap-1'><FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 text-gray-500" />{job_location}</p>
                        <p className='inline-flex items-center gap-1 '>< FontAwesomeIcon icon={faDollarSign} className="h-6 w-6 text-gray-500" />{salary}</p>

                    </div>

                </div>

            </div>

            <div>
                <p className=' w-max mx-auto text-center bg-gradient-to-r from-blue-500 to-violet-500 px-2 py-2 rounded text-white'> <Link to={`/${id}`}>View Details</Link></p>
            </div>
        </div>
    );
};

export default FilteredJob;