const HorizontalScroller = ({children}) => {
    return (
        <div className='bg-white overflow-x-auto whitespace-nowrap lg:whitespace-normal ' >
            {children}
        </div>
    )
};

export default HorizontalScroller;