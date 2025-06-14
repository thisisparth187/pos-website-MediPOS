import React, { useState } from 'react'
import Header from '../components/shared/Sidebar'
import Table from '../components/shared/Table'
import SearchBar from '../components/shared/SearchBar'

const Categories = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='flex flex-wrap'>
            <Header />

            <div className="ml-[300px] p-6 flex w-full justify-between">

                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <div className='self-end'>
                    <button className='px-20 py-2 bg-gray-900 rounded-md text-white font-semibold hover:bg-blue-400 duration-300'>
                        Add New
                    </button>
                </div>

            </div>

            <div className="ml-[300px] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Table />
            </div>

        </div>
    )

}

export default Categories
