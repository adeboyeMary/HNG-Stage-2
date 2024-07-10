
import ig from '../asset/svg/instagram.svg';
import x from '../asset/svg/x.svg';
import icon from '../asset/svg/icon.svg';
import icon5 from '../asset/svg/icon5.svg';
import icon2 from '../asset/svg/icon2.svg';


const Footer = () => {
    return (
        <div className='mt-16 text-xs'>
            <div className='flex flex-col lg:flex lg:flex-row lg:gap-9 justify-center text-center'>
                <div className='flex flex-row justify-center text-center mt-3 lg:flex 
                lg:flex-row gap-[6.25rem] lg:gap-9 lg:mt-0'>
                    <div className='flex flex-col'>
                    <h2 className='text-black text-base mb-4'>Electronics</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Mobile Phones</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Home appliances</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Tablets</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Laptops</p>
                    <p className='hover:text-[#E52659] hover:font-bold'>Cameras</p>
                    </div>
                    <div className='flex flex-col'>
                    <h2 className='text-black text-base mb-4'>Book & stationery</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Novels</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Office supplies</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Journals</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Notebooks</p>
                    <p className='hover:text-[#E52659] hover:font-bold'>Hygiene</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center mr-4 text-center lg:flex lg:flex-row 
                gap-[5.25rem] lg:gap-9 '>
                    <div className='flex flex-col'>
                    <h2 className='text-black text-base mb-4  lg:mr-0'>Photography</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Camera</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lenses</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lighting</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Accessories</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Batteries</p>
                    </div>
                    <div>
                    <h2 className='text-black text-base mb-4'>Beauty</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>SkinCare</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Hair</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Makeup</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Perfumes</p>
                    <p className='hover:text-[#E52659] hover:font-bold'>Hygiene</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center text-center lg:flex lg:flex-row 
                gap-[6.25rem] lg:gap-9'>
                    <div className='flex flex-col'>
                    <h2 className='text-black text-base mb-4'>Food</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Camera</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lenses</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lighting</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Accessories</p>
                    <p className='hover:text-[#E52659] hover:font-bold'>Batteries</p>
                    </div>
                    <div className='flex flex-col'>
                    <h2 className='text-black text-base mb-4'>Toys & Games</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Mobile Phones</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Home appliances</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Tablets</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Laptops</p>
                    <p className='hover:text-[#E52659] hover:font-bold'>Cameras</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center text-center lg:flex lg:flex-row 
                gap-[6.25rem] lg:gap-9 '>
                    <div className='flex flex-col'>
                    <h2 className='text-black text-base mb-4'>Sports & Outdoor</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Camera</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lenses</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Lighting</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Accessories</p>
                    <p className='hover:text-[#E52659] hover:font-bold'>Batteries</p>
                    </div>
                    <div>
                    <h2 className='text-black text-base mb-4 '>Fashion</h2>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>SkinCare</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Hair</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Makeup</p>
                    <p className='mb-3 hover:text-[#E52659] hover:font-bold'>Perfumes</p>
                    <p className=' hover:text-[#E52659] hover:font-bold'>Hygiene</p>
                    </div>
                </div>

            </div>
                
                
            <footer>
                <div className="flex flex-row justify-center my-10">
                    <span><img src={ig} alt="ig" className='ml-[20px] lg:w-[44%]' /></span>
                    <span><img src={x} alt="x" className='mt-[4px] ml-[20px] lg:w-[44%]' /></span>
                    <span><img src={icon} alt="icon" className='ml-[20px] lg:w-[44%]' /></span>
                    <span><img src={icon5} alt="icon5" className='ml-[20px] lg:w-[44%]' /></span>
                    <span><img src={icon2} alt="icon2" className='ml-[20px] lg:w-[44%]' /></span>
                </div>

                <div className="flex flex-row justify-center space-between mt-8 lg:mt-3 mb-3">
                    <span className='lg:ml-16 hover:text-[#E52659] hover:font-bold'>Privacy Policy</span>
                    <span className='lg:ml-16 hover:text-[#E52659] hover:font-bold'>FAQs</span>
                    <span className='lg:ml-16 hover:text-[#E52659] hover:font-bold'>Term of use</span>
                </div>

                <div  className='text-center mb-5 lg:ml-[4rem]'>
                    <span>Sonjinwoostores&copy; 2020 - 2023, All Rights Reserved</span></div>
            </footer>
        </div>
    )
};

export default Footer;