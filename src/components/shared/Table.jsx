import React, { useState } from 'react'
import medicineData from '../../data/medicines.json'

const Table = () => {
    // const medicines = medicineData
    return (
        <div className="p-4">
            <table className="w-280 border border-collapse border-gray-400">
                <thead className="bg-gray-900 text-gray-200">
                    <tr>
                        <th className="border-2 border-gray-900 px-4 py-2">Name</th>
                        <th className="border-2 border-gray-900 px-4 py-2">Price</th>
                        <th className="border-2 border-gray-900 px-4 py-2">Stock</th>
                        <th className="border-2 border-gray-900 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {medicineData.map((val, i) => (
                        <tr key={i}>
                            <td className="border-2 px-4 py-2">{val.name}</td>
                            <td className="border-2 px-4 py-2">{val.price}</td>
                            <td className="border-2 px-4 py-2">{val.stock}</td>
                            <td className="border-2 px-4 py-2"><i class=" bi bi-pencil-fill mr-4 border-2 p-1 rounded-md bg-gray-900 text-amber-50 hover:bg-amber-50 hover:text-gray-900 duration-200"></i><i class="bi bi-trash-fill p-1 border-2 rounded-md bg-gray-900 text-amber-50 hover:bg-amber-50 hover:text-gray-900 duration-200"></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
