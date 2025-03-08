
import ig from '../asset/svg/instagram.svg';
import x from '../asset/svg/x.svg';
import icon from '../asset/svg/icon.svg';
import icon5 from '../asset/svg/icon5.svg';
import icon2 from '../asset/svg/icon2.svg';


const Footer = () => {
    return (
        <div className='mt-16 lg:mt-[9rem] ml-[2rem] lg:ml-[4rem]  '>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 text-[10px] w-[75%] md:w-[80%] m-auto 
            lg:w-[75%] lg:m-auto 
            gap-2 lg:text-center'>
                <div className='flex flex-col'>
                    <h2 className='text-black text-[12px] mb-3'>Electronics</h2>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Mobile Phones</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Home appliances</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Tablets</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Laptops</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Cameras</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-black text-[12px] mb-3'>Book & stationery</h2>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Novels</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Office supplies</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Journals</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Notebooks</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Hygiene</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-black text-[12px] mb-3 lg:mr-0'>Photography</h2>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Camera</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Lenses</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Lighting</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Accessories</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Batteries</p>
                </div>
                <div>
                    <h2 className='text-black text-[12px] mb-3'>Beauty</h2>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>SkinCare</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Hair</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Makeup</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Perfumes</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Hygiene</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-black text-[12px] mb-3'>Food</h2>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Camera</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Lenses</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Lighting</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Accessories</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Batteries</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-black text-[12px] mb-3'>Toys & Games</h2>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Mobile Phones</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Home appliances</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Tablets</p>
                    <p className='mb-2 hover:text-[#E52659] hover:font-bold'>Laptops</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Cameras</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-black text-[12px] mb-4'>Sports & Outdoor</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Camera</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lenses</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lighting</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Accessories</p>
                    <p className='hover:text-[#E52659] hover:font-bold'>Batteries</p>
                </div>
                <div>
                    <h2 className='text-black text-[12px] mb-4 '>Fashion</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>SkinCare</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Hair</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Makeup</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Perfumes</p>
                    <p className=' hover:text-[#E52659] hover:font-bold'>Hygiene</p>
                </div>
            </div>
                
                
            <footer>
                <div className="flex flex-row ml-[5rem] md:ml-[16rem] lg:justify-center mt-10">
                    <span><img src={ig} alt="ig" className='w-[60%] lg:w-[44%]' /></span>
                    <span><img src={x} alt="x" className='mt-[4px] w-[60%] lg:w-[44%]' /></span>
                    <span><img src={icon} alt="icon" className='w-[60%] lg:w-[44%]' /></span>
                    <span><img src={icon5} alt="icon5" className='w-[60%] lg:w-[44%]' /></span>
                    <span><img src={icon2} alt="icon2" className='w-[60%] lg:w-[44%]' /></span>
                </div>

                <div className="flex flex-row justify-center space-between mt-2 xs:ml-[-2.4rem] ml-[-4.4rem] 
                sm:ml-[-2.4rem] md:ml-[-5rem] 
                text-[10px] lg:mt-3 mb-2">
                    <span className='lg:ml-16 hover:text-[#E52659] hover:font-bold'>Privacy Policy</span>
                    <span className='lg:ml-16 hover:text-[#E52659] hover:font-bold'>FAQs</span>
                    <span className='lg:ml-16 hover:text-[#E52659] hover:font-bold'>Term of use</span>
                </div>

                <div  className='ml-[3rem] md:ml-[13.5rem] mb-5 text-[10px]'>
                    <span>Sonjinwoostores&copy; 2020 - 2023, All Rights Reserved.</span></div>
            </footer>
        </div>
    )
};

export default Footer;