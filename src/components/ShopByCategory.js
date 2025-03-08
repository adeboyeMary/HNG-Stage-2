
import HorizontalScroller from './HorizontalScroller';
import Card from './ui/Card';


const ShopByCategory = ({products}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 lg:w-[89.58%] lg:m-auto lg:mt-2 lg:rounded-sm '>
            <p className='pl-2 text-black '>Shop by categories</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className='flex flex-row '>
                    {products.map((product) => (
                        <li key={product.id} className='bg-white border-[1px] m-2 p-2 ml-4 w-[6rem] h-[6rem]
                        border-[#EDEDED] hover:border-[1px] hover:border-[#E52659] lg:w-[8.3rem] lg:h-[8.3rem] 
                        lg:gap-1 justify-between'>
                            <div className='ml-4 w-[4rem] lg:w-[6rem] lg:h-[6rem]'>
                                <img src={product.image} alt={product.name} className='ml-[-5px] w-[4rem] lg:w-[7rem] 
                                lg:h-[7rem] rounded-[50%] ' />
                            </div>
                            <div>
                                <p className='text-center w-[5.5rem] lg:w-[7rem] mt-[1px] lg:mt-[1px]'>{product.name}</p>
                            </div>
                        </li>
                    ) )}
                </ul>
                {/* <ul className='bg-white w-[94-67%] lg:w-[94.67%] text-black mr-2 flex flex-row  '>
                    {products.map((product) => (
                        <li key={product.id} className='lg:mr-2 bg-white border-[1px] m-2 p-2 lg:w-[8rem]
                            border-[#EDEDED] hover:border-[1px] hover:border-[#E52659] lg:justify-between'>
                                {/* <li key={product.id} className='mr-2'> */}
                                    {/* <div className='bg-[#F5F5F5] lg:w-[5rem] lg:h-[4rem] h-[82px] rounded-[54%] 
                                    lg:rounded-[54%] pt-1 lg:pt-2'>
                                        <img src={product.image} alt={product.name} className='m-auto rounded-[50%]
                                        lg:rounded-[50%] lg:w-[9rem] lg:h-[4rem] ' />
                                    </div>
                                    <div><p className='text-center lg:w-[5rem] font-normal mt-3'>{product.name}</p></div>
                                </li> */}
                        {/* </li>
                       
                ) )}
                </ul> */} 
            </HorizontalScroller>
        </div>
    )
};

export default ShopByCategory;