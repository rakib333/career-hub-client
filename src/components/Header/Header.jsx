import ActiveLink from "../ActiveLink/ActiveLink";
import logo from '../../assets/images/All Images/CareerHub.png'
import './Header.css'

const Header = () => {
    return (
        <div className="flex justify-between items-center py-10">
            <img className="w-[170px] h-[25px]" src={logo} alt="" />
            <nav className="flex margin-header">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </nav>
            <button className="py-5 text-white px-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg ">Start Applying</button>
        </div>
    );
};

export default Header;