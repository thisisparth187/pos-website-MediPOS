import React, { useState, useEffect } from 'react'

const Bill = ({ selectedItems = [] }) => {
    const [items, setItems] = useState(selectedItems);

    useEffect(() => {
        setItems(selectedItems);
    }, [selectedItems]);

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    };

    const updateQuantity = (index, newQuantity) => {
        if (newQuantity < 1) return;
        const newItems = [...items];
        newItems[index].quantity = newQuantity;
        setItems(newItems);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div className='p-4 bg-white rounded-lg shadow-md'>
            <h2 className="text-2xl font-bold text-[#7B4019] mb-4">Bill</h2>
            <table className="w-full border border-collapse border-gray-400">
                <thead className="bg-[#7B4019] text-gray-200">
                    <tr>
                        <td className='px-6 py-2'>Product</td>
                        <td className='px-2 py-1'>Quantity</td>
                        <td className='px-2 py-1'>Price</td>
                        <td className='px-2 py-1'>Total</td>
                        <td className='px-2 py-1'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className='px-6 py-2'>{item.name}</td>
                            <td className='px-2 py-1'>
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                                        className="px-2 py-1 bg-[#7B4019] text-white rounded"
                                    >-</button>
                                    <span>{item.quantity || 1}</span>
                                    <button 
                                        onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                                        className="px-2 py-1 bg-[#7B4019] text-white rounded"
                                    >+</button>
                                </div>
                            </td>
                            <td className='px-2 py-1'>₹{item.price}</td>
                            <td className='px-2 py-1'>₹{item.price * (item.quantity || 1)}</td>
                            <td className='px-2 py-1'>
                                <button 
                                    onClick={() => removeItem(index)}
                                    className="px-2 py-1 bg-red-500 text-white rounded"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="bg-gray-100">
                        <td colSpan="3" className='px-6 py-2 font-bold text-right'>Total:</td>
                        <td className='px-2 py-1 font-bold'>₹{calculateTotal()}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Bill
