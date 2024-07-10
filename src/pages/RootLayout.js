import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";



const RootLayout = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <MainHeader />
            
            <>
                <Outlet />
            </>

            <Footer />
        </div>
    )
};

export default RootLayout;