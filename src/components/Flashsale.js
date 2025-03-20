import image6 from '../asset/png/image6.png';
import fullFlash from '../asset/png/fullFlash.png';
import star from '../asset/svg/star.svg';


const FlashSale = () => {
    return (
        <div className='bg-white w-[94.67%] lg:w-[89.58%] m-auto p-3'>
            <p className='pl-2 text-black '>Flash sale</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <div className='flex flex-row  lg:m-auto lg:my-3 '>
                <div className='bg-[#E6E6E6] w-[400px] h-[242px] mt-[11px] md:h-[362px] lg:h-[21.4rem] rounded-lg
                lg:w-[37rem] xl:w-[38rem] xl:h-[25.4rem] '>
                    <img src={image6} alt='wristwatch' className='mt-[2.5rem] md:mt-[1rem] lg:mt-[2.9rem] 
                    xl:ml-[16px] ' /> 
                </div>

                <div className='lg:w-[48rem] xl:w-[42rem] '>
                    <div className='bg-white p-4'>
                        <p className='text-[23px] md:text-[36px] md:mt-4 xl:text-[43px] '>Apple watch Ultra</p>
                        <p className='text-[13px] md:text-[19.5px] lg:text-[18.5px] xl:text-[20.7px] '>
                            Meet the most rugged and capable Apple Watch ever created ... </p>
                        <div className="flex flex-row my-3 justify-between text-[13px] md:text-[19.5px] 
                        xl:text-[20.7px] ">
                            <p>#376,000</p>
                            <p className='discount'>#400,000</p>
                        </div>

                        <div className='flex flex-row text-black  text-[9px] md:text-[16px] xl:text-[18px] '>
                            <span className='bg-[#E6E6E6] py-[3px] px-[7px] md:py-[3px] lg:py-[3px] lg:px-[5px] 
                            rounded-sm '>
                                Watches
                            </span>
                            <span className='ml-3 bg-[#E6E6E6] py-[2.7px] px-[5px] rounded-sm '>
                                Official store
                            </span>
                        </div>

                        <div className='flex flex-row justify-between text-[10px] md:text-[14.5px] mt-2 
                        xl:text-[16px]'>
                            <p>7832 sold</p>
                            <div className='flex flex-row gap-1'>
                                <img src={star} alt='star' />
                                <p className='mt-1'>4.5</p>      
                            </div>
                        </div>
                    </div>
                </div>
                <img src={fullFlash} alt='flashSalePoster' className='hidden lg:block lg:w-[20rem] xl:w-[29rem]
                xl:mt-[10px] ' />
            </div>
        </div>
    )
};

export default FlashSale;