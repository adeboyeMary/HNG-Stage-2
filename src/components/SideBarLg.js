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
        <div className='flex flex-column lg:pt-2 lg:w-[89.58%] lg:m-auto  '>
            {/* md:h-[10vh] lg:h-[20vh] */}
                <ul className='hidden lg:block '>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={electronic} alt='electronic' /> Electronics</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={telecoms} alt='telecoms' />Telecommunication</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={food} alt='food'/>Food</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={sport} alt='sport'/>Sports</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={finance} alt='finance'/>Finances</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={photo} alt='photography'/>Photography</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={business} alt='business'/>Business</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={health} alt='health' />Health</li>
                    <li className='flex flex-row pb-[10px] xl:pb-[6px] hover:text-[#E52659] hover:font-bold gap-3'><img src={travel} alt='travel'/> Travel</li>
                    <li className='flex flex-row hover:text-[#E52659] hover:font-bold gap-3'><img src={store} alt='store'/>Stores</li>
                </ul>

                {/* <div className='lg:flex xl:flex lg:flex-row xl:flex-row '> */}
                {/* lg: xl:w-[74%] */}
                    <div className=' m-auto relative mt-[86px] '>
                    {/* w-[94.67%] lg:w-[70%] xl:w-[70%] lg:m-0 lg: xl:mt-0 */}
                        <img src={pagePoster} alt='pagePoster' className='rounded-[6px] lg:block' />
                    </div>
                    <div className='hidden lg:block '>
                        <img src={half} alt='flashSalePoster' className='' />
                    </div>
                {/* </div> */}
            </div>  
            // xl:block lg:w-[26%] xl:w-[24%] lg:bg-[#ffffff] xl:bg-[#ffffff] 
            // lg:border-[#E6E6E6] xl:border-[#E6E6E6] lg:border-[1px] xl:border-[1px] lg:rounded-sm 
            // xl:rounded-sm lg:mt-[10px] lg:h-[51vh] xl:h-[18.4vh] lg:pl-3 xl:pl-3 lg:pt-3
    )
};

export default SideBarLg;