import HorizontalScroller from './HorizontalScroller';
// import Card from './ui/Card';


const ShopByCategory = ({items}) => {
    return (
        <>
            <p className='bg-white pt-5 pl-2 text-black '>Shop by categories</p>

            <HorizontalScroller>
                <ul className='bg-white w-[94-67%] text-black mr-2 flex flex-row'>
                    {items.map((item) => (
                        <li key={item.key} className='mr-3'>
                            <img src={item.image} alt={item.name} />
                            <p className='text-center font-normal mt-3'>{item.name}</p>
                        </li>
                ) )}
                </ul>
        </HorizontalScroller>
        </>
    )
};

export default ShopByCategory;