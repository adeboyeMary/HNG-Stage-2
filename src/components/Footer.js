
import ig from '../asset/svg/instagram.svg';
import x from '../asset/svg/x.svg';
import icon from '../asset/svg/icon.svg';
import icon5 from '../asset/svg/icon5.svg';
import icon2 from '../asset/svg/icon2.svg';


const Footer = () => {
    return (
        <div >
            <div></div>
            <footer>
                <div className="flex flex-row justify-center my-10">
                    <span><img src={ig} alt="ig" className='ml-[20px]' /></span>
                    <span><img src={x} alt="x" className='mt-[4px] ml-[20px]' /></span>
                    <span><img src={icon} alt="icon" className='ml-[20px]' /></span>
                    <span><img src={icon5} alt="icon5" className='ml-[20px]' /></span>
                    <span><img src={icon2} alt="icon2" className='ml-[20px]' /></span>
                </div>

                <div className="flex flex-row justify-center mt-8 mb-5">
                    <span className='ml-16 hover:text-[#E52659] hover:font-bold'>Privacy Policy</span>
                    <span className='ml-16 hover:text-[#E52659] hover:font-bold'>FAQs</span>
                    <span className='ml-16 hover:text-[#E52659] hover:font-bold'>Term of use</span>
                </div>

                <div  className='text-center mb-5 ml-[4rem]'>
                    <span>Sonjinwoostores&copy; 2020 - 2023, All Rghts Reserved</span></div>
            </footer>
        </div>
    )
};

export default Footer;