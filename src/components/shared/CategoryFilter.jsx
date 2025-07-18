import React from 'react'

const categories = ['All', 'Starter', 'Main Course', 'Soups', 'Desert', 'Drinks'];

const CategoriesFilter = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className='flex flex-col gap 2'>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-1 py-2 mb-3 rounded-md text-white font-semibold ${selectedCategory === cat ? 'bg-[#7B4019]' : 'bg duration-300 bg-[#FFBF78] hover:bg-[#FFEEA9] hover:text-[#7B4019]'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}

export default CategoriesFilter
