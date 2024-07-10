import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";



const RootLayout = () => {
    return (
        <div>
            <MainHeader />
            
            <>
                <Outlet />
            </>

            <Footer />
        </div>
    )
};

export default RootLayout;