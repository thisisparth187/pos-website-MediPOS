import React, { useState, useEffect } from 'react'
import Header from '../components/shared/Sidebar'
import MediCard from '../components/shared/MediCard'
import SearchBar from '../components/shared/SearchBar'
import CategoryFilter from '../components/shared/CategoryFilter'
import medicineData from '../data/medicines.json'

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All')

    const medicines = medicineData



    const filteredMedicines = medicines.filter((med) =>
        (selectedCategory === 'All' || med.category === selectedCategory) &&
        med.name.toLowerCase().includes(searchTerm.toLowerCase())
    )



    return (
        <div className='flex flex-wrap'>
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
                    {filteredMedicines.map((med, index) => (
                        <MediCard key={index} {...med} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Dashboard
