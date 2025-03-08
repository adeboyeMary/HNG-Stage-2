import wristwatch from '../asset/png/wristwatch.png';


const BestDeal = () => {
    return (
        <div className='bg-[#22233C] flex flex-row text-white w-[94.67%] m-auto rounded-xl 
        my-3.5 lg:w-[89.58%] lg:m-auto lg:my-3 lg:rounded-md '>
            <p className='m-auto ml-[1.9rem] md:ml-[6.5rem] lg:ml-[9rem] text-[13.5px] md:text-[17.5px] '>
                Best deal on smartwatches <br />UP to 
                <span className='text-[#FF2A63]'> 80%</span> OFF</p>
                
            <img src={wristwatch} alt='wristwatchPoster' className='w-[138px] lg:w-[140px] md:mr-[8rem] 
            mr-[0.4rem] lg:mr-[22rem] ' />
        </div>
    )
};

export default BestDeal;