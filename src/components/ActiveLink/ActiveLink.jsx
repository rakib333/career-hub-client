import { NavLink } from "react-router-dom";
import './ActiveLink.css'


const ActiveLink = ({ to, children }) => {
    return (
        <div className="">
            <NavLink to={to} className={({ isActive }) => isActive ? "active" : ""}>
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;