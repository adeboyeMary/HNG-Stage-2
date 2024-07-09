import HorizontalScroller from "./HorizontalScroller";

const OfficialStores = ({items}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Official stores</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className="flex flex-row">
                    {items.map((item) => (
                        <li className="ml-4">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name} </p>
                        </li>
                    ))}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default OfficialStores;