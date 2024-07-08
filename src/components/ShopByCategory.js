import HorizontalScroller from './HorizontalScroller';
import Card from './ui/Card';


const ShopByCategory = ({items}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 '>
            <p className='pl-2 text-black '>Shop by categories</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className='bg-white w-[94-67%] text-black mr-2 flex flex-row p'>
                    {items.map((item) => (
                        <Card>
                        <li key={item.key} className='mr-2'>
                            <img src={item.image} alt={item.name} className='w-[5rem] h-[4rem] object-cover rounded-[50%]' />
                            <p className='text-center font-normal mt-3'>{item.name}</p>
                        </li>
                        </Card>
                ) )}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default ShopByCategory;