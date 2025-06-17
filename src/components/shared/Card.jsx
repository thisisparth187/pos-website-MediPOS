import React from 'react';

const Card = ({ product, onCardClick, onDelete, onUpdate }) => {
    const { _id, name, price, stock, image, category } = product; // Destructure from product

    const handleCardBodyClick = () => {
        // This existing function is for adding to the bill
        if (onCardClick) {
            onCardClick({ name, price, stock, image, category }); // Pass necessary info for billing
        }
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation(); // Prevent card body click when delete button is clicked
        if (onDelete) {
            onDelete(_id);
        }
    };

    const handleEditClick = (e) => {
        e.stopPropagation(); // Prevent card body click
        if (onUpdate) {
            // For now, just pass the id. Dashboard's onUpdate would handle opening a form.
            // You might want to pass the whole product object if Card's onUpdate needs it directly
            onUpdate(_id, { name: `${name} (Updated)`, price: price + 10 }); // Example update
        }
        console.log("Edit product:", _id);
    };

    return (
        <div className="group bg-[#FFBF78] text-white rounded-xl shadow-md p-4 w-full max-w-45 h-full flex flex-col justify-between">
            <div onClick={handleCardBodyClick} className="cursor-pointer">
                <img src={image || 'https://via.placeholder.com/150'} alt={name} className='w-full h-40 object-cover rounded-md' />
                <h2 className="text-xl font-bold text-[#7B4019] group-hover:text-[#FFBF78] duration-300">{name}</h2>
                <p className="text-[#7B4019] group-hover:text-[#FFBF78] duration-300">Category: {category}</p>
                <p className="text-[#7B4019] group-hover:text-[#FFBF78] duration-300">Price: ₹{price}</p>
                <p className="text-[#7B4019] group-hover:text-[#FFBF78] duration-300">Stock: {stock}</p>
            </div>
            <div className="mt-2 flex justify-end space-x-2">
                <button
                    onClick={handleEditClick}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                >
                    Edit
                </button>
                <button
                    onClick={handleDeleteClick}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;