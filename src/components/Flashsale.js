import image6 from '../asset/png/image6.png';
import fullFlash from '../asset/png/fullFlash.png';
import star from '../asset/svg/star.svg';


const FlashSale = () => {
    return (
        <div className='bg-white w-[94.67%] lg:w-[89.58%] m-auto p-3'>
            <p className='pl-2 text-black '>Flash sale</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <div className='flex flex-row  lg:m-auto lg:my-3 '>
                <div className='bg-[#E6E6E6] w-[400px] h-[242px] mt-[11px] md:h-[362px] lg:h-[280px] rounded-lg'>
                    <img src={image6} alt='wristwatch' className='mt-[2rem] md:mt-[1rem] lg:mt-[1.7rem]' /> 
                </div>

                <div className='ml-5'>
                    <div className='bg-white p-4'>
                        <p className='text-[24px] '>Apple watch Ultra</p>
                        <p className='text-[20px] '>Meet the most rugged and capable Apple Watch ever created ... </p>
                        <div className="flex flex-row my-3 justify-between">
                            <p>#376,000</p>
                            <p className='discount'>#400,000</p>
                        </div>

                        <div className='flex flex-row text-black'>
                            <span className='bg-[#E6E6E6] py-[3px] px-[7px] lg:py-[3px] lg:px-[5px] rounded-sm '>Watches</span>
                            <span className='ml-3 bg-[#E6E6E6] py-[2px] px-[5px] rounded-sm '>Official store</span>
                        </div>

                        <div     className='flex flex-row justify-between'>
                            <p>7832 sold</p>
                            <div className='flex flex-row'>
                                <img src={star} alt='star' />
                                <p>4.5</p>      
                            </div>
                        </div>
                    </div>
                </div>
                <img src={fullFlash} alt='flashSalePoster' className='hidden lg:block lg:w-[50%] ' />
            </div>
        </div>
    )
};

export default FlashSale;