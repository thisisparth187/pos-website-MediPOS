import React, { useEffect, useState } from 'react'; // Added useEffect
import Header from '../components/shared/Sidebar';
import Card from '../components/shared/Card';
import SearchBar from '../components/shared/SearchBar';
import CategoryFilter from '../components/shared/CategoryFilter';
// import backData from '../data/backData.json'; // Removed
import Bill from '../components/shared/Bill';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All'); // Keep 'All' as default
    const [categories, setCategories] = useState(['All']);
    const [selectedItems, setSelectedItems] = useState([]); // For billing, keep for now
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data); // Initialize filteredProducts
                const uniqueCategories = [
                    'All',
                    ...new Set(data.map((product) => product.category)),
                ];
                setCategories(uniqueCategories);
                setError(null);
            } catch (e) {
                console.error("Failed to fetch products:", e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const applyFilters = () => {
        let tempProducts = products;
        if (selectedCategory !== 'All') {
            tempProducts = tempProducts.filter(
                (product) => product.category === selectedCategory
            );
        }
        if (searchTerm) {
            tempProducts = tempProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredProducts(tempProducts);
    };

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedCategory, products]);


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

    // CRUD Operations
    const handleDeleteProduct = async (productId) => {
        try {
            const response = await fetch(`/api/products/${productId}`, { method: 'DELETE' });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            setProducts(prev => prev.filter(p => p._id !== productId));
            // setSelectedItems(prev => prev.filter(p => p._id !== productId)); // Also remove from bill if present
        } catch (e) {
            console.error("Failed to delete product:", e);
            setError(e.message); // Or a more user-friendly error state
        }
    };

    // Placeholder for Add/Update - will require forms/modals
    const handleAddProduct = async (newProductData) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProductData),
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const addedProduct = await response.json();
            setProducts(prev => [...prev, addedProduct]);
        } catch (e) {
            console.error("Failed to add product:", e);
            setError(e.message);
        }
    };

    const handleUpdateProduct = async (productId, updatedProductData) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProductData),
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const updatedProduct = await response.json();
            setProducts(prev => prev.map(p => p._id === productId ? updatedProduct : p));
        } catch (e) {
            console.error("Failed to update product:", e);
            setError(e.message);
        }
    };

    if (loading) return <div className="ml-[300px] p-6">Loading products...</div>;
    if (error) return <div className="ml-[300px] p-6 text-red-500">Error: {error} <button onClick={() => window.location.reload()} className="ml-2 p-1 bg-blue-500 text-white rounded">Retry</button></div>;

    return (
        <div className='flex flex-wrap justify-between'>
            <Header />

            {/* TODO: Add UI for adding a product */}
            {/* <button onClick={() => handleAddProduct({ name: "Test", price: 10, stock: 10, category: "Test Cat", image: ""})}>Add Test Product</button> */}

            <div className="ml-[300px] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="ml-[300px] p-6 flex">
                <div className='mr-8'>
                    <div className="w-[180px]">
                        <CategoryFilter
                            categories={categories} // Pass dynamic categories
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {filteredProducts.map((product) => (
                        <Card
                            key={product._id} // Use _id from MongoDB
                            product={product} // Pass the whole product object
                            onCardClick={handleCardClick} // For adding to bill
                            onDelete={handleDeleteProduct} // For deleting product
                            onUpdate={handleUpdateProduct} // For updating product
                            // {...product} // Alternative to passing product object if Card expects individual props
                        />
                    ))}
                </div>

                <div className='ml-8'>
                    <Bill selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
