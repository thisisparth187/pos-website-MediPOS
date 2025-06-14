import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='flex items-center gap-4 bg-gray-900 px-2 py-1 rounded-md'>
            <i class="bi bi-search text-white pl-2"></i>
            <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='bg-gray-900 text-white px-2 py-1 rounded-md outline-none' />
        </div>
    )
}

export default SearchBar
