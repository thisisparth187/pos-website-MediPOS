import React from 'react';

// Reverted to expect individual props
const Card = ({ name, price, stock, image, category, onCardClick }) => {

    const handleCardClick = () => {
        if (onCardClick) {
            // Pass the item's details for billing or other actions
            onCardClick({ name, price, stock, image, category });
        }
    };

    return (
        // The main div is clickable
        <div
            onClick={handleCardClick} // Simplified onClick handler
            className="group bg-[#FFBF78] text-white rounded-xl shadow-md p-4 w-full max-w-45 h-full flex flex-col justify-between hover:bg-[#7B4019] duration-300 cursor-pointer"
        >
            {/* Content of the card */}
            <div>
                <img src={image || 'https://via.placeholder.com/150'} alt={name} className='w-full h-40 object-cover rounded-md' />
                <h2 className="text-xl font-bold text-[#7B4019] group-hover:text-[#FFBF78] duration-300 mt-2">{name}</h2>
                {category && <p className="text-sm text-[#7B4019] group-hover:text-[#FFBF78] duration-300">{category}</p>}
                <p className="text-[#7B4019] group-hover:text-[#FFBF78] duration-300">Price: ₹{price}</p>
                <p className="text-[#7B4019] group-hover:text-[#FFBF78] duration-300">Stock: {stock}</p>
            </div>
            {/* Removed Edit and Delete buttons and their container div */}
        </div>
    );
};

export default Card;