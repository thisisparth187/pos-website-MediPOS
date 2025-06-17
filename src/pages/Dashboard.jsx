import React, { useState } from 'react'
import Header from '../components/shared/Sidebar'
import Card from '../components/shared/Card'
import SearchBar from '../components/shared/SearchBar'
import CategoryFilter from '../components/shared/CategoryFilter'
import backData from '../data/backData.json'
import Bill from '../components/shared/Bill'

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedItems, setSelectedItems] = useState([])

    const data = backData

    const handleCardClick = (item) => {
        const existingItemIndex = selectedItems.findIndex(i => i.name === item.name);
        if (existingItemIndex !== -1) {
            const newItems = [...selectedItems];
            newItems[existingItemIndex] = {
                ...newItems[existingItemIndex],
                quantity: (newItems[existingItemIndex].quantity || 1) + 1
            };
            setSelectedItems(newItems);
        } else {
            setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
        }
    };

    const filteredItems = data.filter((med) =>
        (selectedCategory === 'All' || med.category === selectedCategory) &&
        med.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className='flex flex-wrap justify-between'>
            <Header />

            {/*  */}
            <div className="ml-[300px] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="ml-[300px] p-6 flex">
                <div className='mr-8'>
                    <div className="w-[180px]">
                        <CategoryFilter
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {filteredItems.map((med, index) => (
                        <Card 
                            key={index} 
                            {...med} 
                            onCardClick={handleCardClick}
                        />
                    ))}
                </div>

                <div className='ml-8'>
                    <Bill selectedItems={selectedItems} />
                </div>
            </div>

        </div>
    );
}

export default Dashboard
