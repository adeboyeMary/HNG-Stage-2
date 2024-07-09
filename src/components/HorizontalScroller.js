const HorizontalScroller = ({children}) => {
    return (
        <div className='bg-white overflow-x-auto whitespace-nowrap lg:overflow-x-clip lg:whitespace-normal ' >
            {children}
        </div>
    )
};

export default HorizontalScroller;