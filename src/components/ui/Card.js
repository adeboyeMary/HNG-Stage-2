const Card = (props) => {
    return(
        <div className="bg-white border-[1px] m-2 p-2 border-[#EDEDED] ">{props.children}</div>
    )
};

export default Card;