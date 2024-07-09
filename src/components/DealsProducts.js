import { Link } from 'react-router-dom';


import HorizontalScroller from "./HorizontalScroller";
import Card from "./ui/Card";


const DealsOfTheDayProducts = ({items}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 w-[94.67%] lg:w-[89.58%] lg:m-auto lg:my-3'>
            <p className='pl-2 text-black '>Popular</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            {/* className='lg:hidden hover:bg-[#FF2A63]'> */}
            <HorizontalScroller>
                <ul className='bg-white w-[94-67%] mr-2 flex flex-row whitespace-normal'>
                    {items.map((item) => (
                        <Link to='/checkout' className='hover:bg-[]'>
                            <Card>
                            <li key={item.id} className="text-[12px]" >
                                <div className="bg-[#F5F5F5] m-auto pt-3 pb-3 w-[187spx] lg:w-[128px] h-[133px] rounded-lg">
                                    <img alt={item.name} src={item.image} className="m-auto" />
                                </div>
                                
                                <p className='text-black text-sm mt-3'>{item.name}</p>
                                <p className="leading-3 mt-3">{item.description}</p>
                                <div className="flex flex-row my-3 justify-between">
                                    <p>{item.price}</p>
                                    <p className='discount '>{item.discount}</p>
                                </div>

                                <div className='flex flex-row text-black'>
                                    <span className='bg-[#E6E6E6] py-[3px] px-[7px] lg:py-[3px] lg:px-[5px] rounded-sm '>Watches</span>
                                    <span className='ml-3 bg-[#E6E6E6] py-[2px] px-[5px] rounded-sm '>Official store</span>
                                </div>
                                <div className="flex flex-row my-3 justify-between">
                                    <p>{item.sale}</p>
                                    <p>{item.rating}</p>
                                </div>
                            </li>        
                            </Card>
                        </Link>
                   
                    ))}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default DealsOfTheDayProducts;