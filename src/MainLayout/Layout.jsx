import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Layout = () => {
    return (
        <div className="full-wrapper">
            <div className="bg-[#F9F9FF]">
                <div className="wrapper">
                    <Header></Header>
                </div>

            </div>

            <div className="full-wrapper">
                <Outlet></Outlet>
            </div>

            <div className="bg-black">
                <div className="w-[1140px] mx-auto">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;