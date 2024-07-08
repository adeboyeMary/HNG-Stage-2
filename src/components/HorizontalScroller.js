const HorizontalScroller = ({children}) => {
    return (
        <div className='bg-white overflow-x-auto whitespace-nowrap lg:' >
            {children}
        </div>
    )
};

export default HorizontalScroller;