
import ig from '../asset/svg/instagram.svg';
import x from '../asset/svg/x.svg';
import icon from '../asset/svg/icon.svg';
import icon5 from '../asset/svg/icon5.svg';
import icon2 from '../asset/svg/icon2.svg';


const Footer = () => {
    return (
        <div>
            <div></div>
            <footer>
                <div className="flex flex-row">
                    <span><img src={ig} alt="ig" /></span>
                    <span><img src={x} alt="x" /></span>
                    <span><img src={icon} alt="icon" /></span>
                    <span><img src={icon5} alt="icon5" /></span>
                    <span><img src={icon2} alt="icon2" /></span>
                </div>

                <div className="flex flex-row">
                    <span>Policy</span>
                    <span>FAQs</span>
                    <span>Term of use</span>
                </div>

                <span>Sonjinwoostores&copy; 2020 - 2023, All Rghts Reserved</span>
            </footer>
        </div>
    )
};

export default Footer;