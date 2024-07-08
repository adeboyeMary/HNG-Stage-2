import wristwatch from '../asset/png/wristwatch.png';


const BestDeal = () => {
    return (
        <div className='bg-[#22233C] flex flex-row text-white '>
            <p>Best deal on smartwatches UP to 
                <span className='text-[#FF2A63] '>80%</span> OFF</p>
                {/* <p>UP to <span className='text-[#FF2A63] '>80%</span> OFF</p> */}
            <img src={wristwatch} alt='wristwatchPoster' />
        </div>
    )
};

export default BestDeal;