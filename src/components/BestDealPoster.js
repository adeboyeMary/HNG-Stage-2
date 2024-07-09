import wristwatch from '../asset/png/wristwatch.png';


const BestDeal = () => {
    return (
        <div className='bg-[#22233C] flex flex-row text-white w-[94.67%] m-auto rounded-xl 
        my-3.5 lg:w-[89.58%] lg:m-auto lg:my-3 lg:rounded-md '>
            <p className='m-auto ml-5 lg:ml-[9rem] '>Best deal on smartwatches <br />UP to 
                <span className='text-[#FF2A63]'> 80%</span> OFF</p>
                
            <img src={wristwatch} alt='wristwatchPoster' className='w-[138px] lg:w-[140px] lg:mr-[22rem] ' />
        </div>
    )
};

export default BestDeal;