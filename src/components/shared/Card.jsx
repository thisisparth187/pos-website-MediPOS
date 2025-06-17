import React from 'react';

const Card = ({ name, price, stock, image }) => {
    return (
        <div className="group bg-[#FFBF78] text-white rounded-xl shadow-md p-4 w-full max-w-45 h-full flex flex-col justify-between hover:bg-[#7B4019] duration-300">
            <img src={image} alt="Image" className='w-full h-40 object-cover rounded-md' />
            <h2 className="text-xl font-bold text-[#7B4019] group-hover:text-[#FFBF78] duration-300">{name}</h2>
            <p className="text-[#7B4019] group-hover:text-[#FFBF78] duration-300">Price: ₹{price}</p>
            <p className="text-[#7B4019] group-hover:text-[#FFBF78] duration-300">Stock: {stock}</p>
        </div>
    );
};

export default Card;