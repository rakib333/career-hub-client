import ActiveLink from "../ActiveLink/ActiveLink";
import logo from '../../assets/images/All Images/CareerHub.png'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-[]">
            <div className="flex justify-between items-center py-10">
                <img className="w-[170px] h-[25px]" src={logo} alt="" />
                <nav className="flex margin-header">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </nav>
                <Link to='/featuredJob' className="py-5 text-white px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg ">Start Applying</Link>
            </div>
        </div>
    );
};

export default Header;