import search from '../asset/svg/search.svg';
import divider from '../asset/svg/divider.svg';

const SearchBar = () => {
    return (
        <div className=' flex flex-row w-[94.67%] m-auto h-[34px] bg-[#EDEDED] rounded-md'>
            <img src={search} alt="searchIcon" className="bg-transparent w-[45.5px]"></img>
            <img alt='dividerIcon' src={divider} className='bg-[#EDEDED] m-2 '/>
            <input className="bg-[#EDEDED] w-[289.5px] p-2 text-[14px] " 
            type="text" placeholder='At first there was nothing...' />
        </div>
        
    )
};

export default SearchBar;