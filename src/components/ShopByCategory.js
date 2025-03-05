
import HorizontalScroller from './HorizontalScroller';
import Card from './ui/Card';


const ShopByCategory = ({products}) => {
    return (
        <div className='ml-3 bg-white rounded-sm p-3 lg:w-[89.58%] lg:m-auto lg:mt-2 lg:rounded-sm '>
            <p className='pl-2 text-black '>Shop by categories</p>
            <hr className='border-1 border-[#EDEDED] mt-1 mb-2 ml-2' />

            <HorizontalScroller>
                <ul className='bg-white w-[94-67%] text-black mr-2 flex flex-row  '>
                    {products.map((product) => (
                        <li key={product.id} className='lg:mr-2 bg-white border-[1px] m-2 p-2 lg:w-[10rem]
                            border-[#EDEDED] hover:border-[1px] hover:border-[#E52659] lg:justify-between'>
                                {/* <li key={product.id} className='mr-2'> */}
                                    <div className='bg-[#F5F5F5] lg:w-[7rem] lg:h-[6rem] h-[82px] rounded-[54%] 
                                    lg:rounded-[54%] pt-1 lg:pt-2'>
                                        <img src={product.image} alt={product.name} className='m-auto rounded-[50%]
                                        lg:rounded-[50%] lg:w-[9rem] lg:h-[5rem] ' />
                                    </div>
                                    <div><p className='text-center lg:w-[6rem] font-normal mt-3'>{product.name}</p></div>
                                {/* </li> */}
                        </li>
                       
                ) )}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default ShopByCategory;