import HorizontalScroller from "./HorizontalScroller";
import Card from "./ui/Card";


const DealsOfTheDayProducts = ({items}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3'>
            <p className='pl-2 text-black '>Popular</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className='bg-white w-[94-67%] text-black mr-2 flex flex-row whitespace-normal'>
                    {items.map((item) => (
                        <Card>
                            <li key={item.id} >
                                <div className="bg-[#F5F5F5] w-[165px] h-[100px] pt-3 pb-3">
                                    <img alt={item.name} src={item.image} className="m-auto" />
                                </div>
                                
                                <p>{item.name}</p>
                                <p className=" ">{item.description}</p>
                                <p>{item.price}</p>
                                <p>{item.sale}</p>
                                <p>{item.rating}</p>
                            </li>        
                        </Card>
                   
                    ))}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default DealsOfTheDayProducts;