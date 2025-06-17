import React, { useEffect, useState } from 'react'
import backData from '../../data/backData.json'
const Table = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(backData)
    }, [])

    const handleEdit = (id) => {
        alert(id);
    }
    const handleDelete = (id) => {
        if (id > 0) {
            if (window.confirm("Are you sure?")) {
                const dt = data.filter(item => item.id !== id);
                setData(dt);
            }
        }
    }
    return (
        <div className="p-4">
            <table className="w-280 border border-collapse border-gray-400">
                <thead className="bg-[#7B4019] text-gray-200">
                    <tr>
                        <th className="border-2 border-[#7B4019] px-4 py-2">Sr. No.</th>
                        <th className="border-2 border-[#7B4019] px-4 py-2">Name</th>
                        <th className="border-2 border-[#7B4019] px-4 py-2">Price</th>
                        <th className="border-2 border-[#7B4019] px-4 py-2">Stock</th>
                        <th className="border-2 border-[#7B4019] px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, i) => (
                        <tr key={i}>
                            <td className="border-2 px-4 py-2 text-center">{val.id}</td>
                            <td className="border-2 px-4 py-2 text-center">{val.name}</td>
                            <td className="border-2 px-4 py-2 text-center">{val.price}</td>
                            <td className="border-2 px-4 py-2 text-center">{val.stock}</td>
                            <td className="border-2 px-4 py-2 text-center">
                                <button
                                    className='px-2 py-2 mr-2 bg-[#7B4019] rounded-md text-white font-semibold hover:bg-blue-400 duration-300'
                                    onClick={() => handleEdit(val.id)}
                                >Edit</button>
                                <button
                                    className='px-2 py-2 bg-[#7B4019] rounded-md text-white font-semibold hover:bg-blue-400 duration-300'
                                    onClick={() => handleDelete(val.id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
