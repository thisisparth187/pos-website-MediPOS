import React from 'react'

const categories = ['All', 'Capsule', 'Tablet', 'Syrup'];

const CategoriesFilter = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className='flex flex-col gap 2'>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-1 py-2 mb-3 rounded-md text-white font-semibold ${selectedCategory === cat ? 'bg-gray-500' : 'bg duration-300 bg-gray-900 hover:bg-blue-400 '
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}

export default CategoriesFilter
