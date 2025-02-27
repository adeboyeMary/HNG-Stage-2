import HorizontalScroller from "./HorizontalScroller";
import Card from "./ui/Card";

const OfficialStores = ({goods}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Official stores</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className="flex flex-row">
                    
                    {goods.map((goods) => (
                        <Card key={goods.id}>
                        <li key={goods.id} className="ml-4 w-[98px]">
                            <img src={goods.image} alt={goods.name} className="ml-[-5px]" />
                            <p className="text-center mt-[1px]">{goods.name} </p>
                        </li>
                        </Card>
                    ))}
                    
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default OfficialStores;