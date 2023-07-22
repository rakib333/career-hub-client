
import { useLoaderData } from "react-router-dom";
import SingleJobDetails from "../SingleJobDetails/SingleJobDetails";

const JobDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h3>{details.length}</h3>
            {
                details.map(singleJob => <SingleJobDetails key={singleJob.id} job={singleJob}></SingleJobDetails>)
            }
        </div>
    );
};

export default JobDetails;