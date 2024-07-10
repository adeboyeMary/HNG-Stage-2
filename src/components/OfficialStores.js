import HorizontalScroller from "./HorizontalScroller";
import Card from "./ui/Card";

const OfficialStores = ({items}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Official stores</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className="flex flex-row">
                    {items.map((item) => (
                        <Card>
                        <li className="ml-4 w-[98px]">
                            <img src={item.image} alt={item.name} className="ml-[-5px]" />
                            <p className="text-center mt-[1px]">{item.name} </p>
                        </li>
                        </Card>
                    ))}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default OfficialStores;