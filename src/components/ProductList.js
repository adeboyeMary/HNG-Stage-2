import React from 'react';

import pagePoster from '../media/pagePoster.svg';


const ProductList = ({items}) => {

    return (
        <div className='bg-[#EDEDED] w-[100%]'>
            <div className=' m-auto '>
                <img src={pagePoster} alt='pagePoster' className='w-[100%] rounded-[4px]' />
            </div>
            
            <ul>
                {items.map((item)=> (
                    <li key={item.id}>
                        <img src={require(`../${item.image}`).default} alt="product-poster"></img>
                        <p>{item.name}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ProductList;