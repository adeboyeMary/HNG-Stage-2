import HorizontalScroller from "./HorizontalScroller";
import Card from "./ui/Card";


const DealsOfTheDayProducts = ({items}) => {
    return (
        <>
            <p className='bg-white pt-5 pl-2 text-black '>Popular</p>

            <HorizontalScroller>
            <ul className='bg-white w-[94-67%] text-black mr-2 flex flex-row '>
                {items.map((item) => (
                    <Card>
                        <li key={item.id} >
                        <img alt={item.name} src={item.image} />
                        <p>{item.name}</p>
                        <p className="w-[40%]">{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.sale}</p>
                        <p>{item.rating}</p>
                    </li>        </Card>
                   
                ))}
            </ul>
        </HorizontalScroller>
        </>
    )
};

export default DealsOfTheDayProducts;