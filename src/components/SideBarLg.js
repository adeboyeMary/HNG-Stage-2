import pagePoster from '../asset/png/homepage.png';
import half from '../asset/png/half-flash-sale.png';
import electronic from '../asset/svg/electronic.svg';
import telecoms from '../asset/svg/telecoms.svg';
import food from '../asset/svg/food.svg';
import sport from '../asset/svg/sport.svg';
import finance from '../asset/svg/finance.svg';
import photo from '../asset/svg/photo.svg';
import business from '../asset/svg/business.svg';
import health from '../asset/svg/health.svg';
import travel from '../asset/svg/travel.svg';
import store from '../asset/svg/store.svg';

const SideBarLg = () => {
    return (
        <div className='flex flex-column lg:flex-row lg:w-[89.58%] lg:m-auto'>
                <ul className='hidden lg:block lg:w-56 lg:bg-[#ffffff] lg:border-[#E6E6E6] 
                lg:h-[337px] lg:p-3 lg:border-[1px] lg:mt-2 lg:rounded-sm lg:pl-[6px] lg:px-[3px] lg:text-xs'>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={electronic} alt='electronic' /> Electronics</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={telecoms} alt='telecoms' />Telecommunication</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={food} alt='food'/>Food</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={sport} alt='sport'/>Sports</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={finance} alt='finance'/>Finances</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={photo} alt='photography'/>Photography</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={business} alt='business'/>Business</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={health} alt='health' />Health</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={travel} alt='travel'/> Travel</li>
                    <li className='flex flex-row mb-[10px] hover:text-[#E52659] hover:font-bold'><img src={store} alt='store'/>Stores</li>
                    {/* <li className='flex flex-row'><img src={} alt=''/>Official stores</li> */}
                </ul>

                <div className='w-[94.67%] lg:ml-2  m-auto relative mt-[86px] lg:mt-0'>
                    <img src={pagePoster} alt='pagePoster' className='rounded-[6px] lg:block' />
                </div>
                <div className='hidden lg:block  lg:mt-2'>
                    <img src={half} alt='flashSalePoster' />
                </div>
            </div>  
    )
};

export default SideBarLg;