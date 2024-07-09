import HorizontalScroller from "./HorizontalScroller";

const OfficialStores = () => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Popular</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller></HorizontalScroller>
        </div>
    )
};

export default OfficialStores;