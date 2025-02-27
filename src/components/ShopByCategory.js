
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
                            <Card key={product.id}>
                                <li key={product.id} className='mr-2'>
                                    <div className='bg-[#F5F5F5] w-[82px] h-[82px] rounded-[54%] pt-1'>
                                        <img src={product.image} alt={product.name} className='m-auto rounded-[50%]' />
                                    </div>
                                    <p className='text-center font-normal mt-3'>{product.name}</p>
                                </li>
                            </Card>
                       
                ) )}
                </ul>
            </HorizontalScroller>
        </div>
    )
};

export default ShopByCategory;