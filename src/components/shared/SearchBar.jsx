import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='flex items-center gap-4 bg-[#7B4019] px-2 py-1 rounded-md'>
            <i class="bi bi-search text-white pl-2"></i>
            <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='bg-[#7B4019] text-white px-2 py-1 rounded-md outline-none' />
        </div>
    )
}

export default SearchBar
