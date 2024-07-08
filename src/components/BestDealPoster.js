import wristwatch from '../asset/png/wristwatch.png';


const BestDeal = () => {
    return (
        <div className='bg-[#22233C] flex flex-row text-white w-[94.67%] m-auto rounded-xl my-3.5 '>
            <p className='m-auto ml-5'>Best deal on smartwatches <br />UP to 
                <span className='text-[#FF2A63]'> 80%</span> OFF</p>
                {/* <p>UP to <span className='text-[#FF2A63] '>80%</span> 44% OFF</p> */}
            <img src={wristwatch} alt='wristwatchPoster' className='w-[138px]' />
        </div>
    )
};

export default BestDeal;