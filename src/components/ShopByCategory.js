
import HorizontalScroller from './HorizontalScroller';


const ShopByCategory = ({products}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 lg:w-[89.58%] lg:m-auto lg:mt-2 lg:rounded-sm '>
            <p className='pl-2 text-black '>Shop by categories</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className='flex flex-row '>
                    {products.map((product) => (
                        <li key={product.id} className='bg-white border-[1px] m-2 p-2 ml-4 w-[6rem] h-[6rem]
                        border-[#EDEDED] hover:border-[1px] hover:border-[#E52659] lg:w-[7.8rem] lg:h-[7.8rem] 
                         justify-between'>
                            <div className='ml-4 lg:ml-[0.4rem] w-[4rem] lg:w-[6.5rem] lg:h-[6rem]'>
                                <img src={product.image} alt={product.name} className='ml-[-5px] w-[4rem] lg:w-[5.5rem] 
                                lg:h-[5.5rem] rounded-[50%] lg:ml-[3px] ' />
                            </div>
                            <div>
                                <p className='text-center w-[5.5rem] lg:w-[5rem] mt-[1px] lg:mt-[-0.5rem] lg:ml-[0.9rem] '>
                                    {product.name}
                                </p>
                            </div>
                        </li>
                    ) )}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default ShopByCategory;