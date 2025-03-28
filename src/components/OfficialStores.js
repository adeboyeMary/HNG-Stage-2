import HorizontalScroller from "./HorizontalScroller";



const OfficialStores = ({goods}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Official stores</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className="flex flex-row">
                    {goods.map((goods) => (
                        <li key={goods.id} className='bg-white border-[1px] m-2 p-2 ml-4 w-[7rem] border-[#EDEDED] 
                        hover:border-[1px] hover:border-[#E52659] lg:w-[8.3rem] lg:h-[8.3rem] xl:w-[8.6rem]'>
                        <div className="ml-4 w-[76px] lg:w-[6rem] lg:h-[6rem] rounded-[54%] lg:justify-between 
                         xl:w-[6.6rem]">
                            <img src={goods.image} alt={goods.name} className="ml-[-5px] w-[6rem] lg:w-[7rem] 
                            lg:h-[6.4rem] rounded-[50%] xl:w-[7rem] xl:h-[6.2rem] " />
                        </div>
                        <div><p className="text-center w-[6rem] lg:w-[7rem] mt-[1px] lg:mt-[1px] 
                        xl:w-[8rem] text-[13px]">{goods.name} </p></div>
                        </li>
                    ))}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default OfficialStores;