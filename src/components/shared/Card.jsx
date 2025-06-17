import React from 'react';

const Card = ({ name, price, stock, image }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-45 max-h-40">
            <img src={image} alt="Image" />
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600 mt-2">Price: ₹{price}</p>
            <p className="text-gray-600">Stock: {stock}</p>
        </div>
    );
};

export default Card;