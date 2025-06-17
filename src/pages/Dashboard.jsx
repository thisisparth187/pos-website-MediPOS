import React, { useState, useEffect } from 'react'; // useEffect might still be needed for categories
import Header from '../components/shared/Sidebar';
import Card from '../components/shared/Card';
import SearchBar from '../components/shared/SearchBar';
import CategoryFilter from '../components/shared/CategoryFilter';
import backData from '../data/backData.json'; // Restored
import Bill from '../components/shared/Bill';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);
    const [selectedItems, setSelectedItems] = useState([]); // For billing

    // Data is now directly from backData
    // Assuming backData is an array of products. If it's { "products": [...] }, use backData.products
    const data = Array.isArray(backData) ? backData : backData.products || [];

    useEffect(() => {
        // Derive categories from the static data
        if (data.length > 0) {
            const uniqueCategories = [
                'All',
                ...new Set(data.map((product) => product.category)),
            ];
            setCategories(uniqueCategories);
        }
    }, [data]); // data dependency in case backData structure changes, though unlikely for static import

    const handleCardClick = (item) => { // This is for adding to bill
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

    // Filtered items based on search term and selected category
    const filteredItems = data.filter((item) =>
        (selectedCategory === 'All' || item.category === selectedCategory) &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='flex flex-wrap justify-between'>
            <Header />

            <div className="ml-[300px] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="ml-[300px] p-6 flex">
                <div className='mr-8'>
                    <div className="w-[180px]">
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory} // Ensure CategoryFilter uses this prop
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {filteredItems.map((item, index) => ( // Changed from filteredProducts to filteredItems
                        <Card
                            key={item.id || index} // Use item.id if available, otherwise index
                            // Pass individual props as Card component might expect them from its original design
                            name={item.name}
                            price={item.price}
                            stock={item.stock}
                            image={item.image}
                            category={item.category} // Pass category if Card uses it
                            onCardClick={handleCardClick} // This is for billing
                            // onDelete and onUpdate are removed
                        />
                    ))}
                </div>

                <div className='ml-8'>
                    <Bill selectedItems={selectedItems} setSelectedItems={setSelectedItems} /> {/* Ensure Bill can handle setSelectedItems */}
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
