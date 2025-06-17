import React from 'react'

const Bill = () => {
    return (
        <div className='p-4'>
            <table className="w-90 border border-collapse border-gray-400">
                <thead className="bg-[#7B4019] text-gray-200">
                    <tr>
                        <td className='px-6 py-2'>Product</td>
                        <td className='px-2 py-1'>Quantity</td>
                        <td className='px-2 py-1'>Price</td>
                        <td className='px-2 py-1'>Total</td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default Bill
