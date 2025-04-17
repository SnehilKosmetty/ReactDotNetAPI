import React, { useState, useEffect } from 'react';
import './Products.css';

export function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        category: '',
        inStock: true
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('api/products');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
            setError(null);
        } catch (err) {
            setError(`Error fetching products: ${err.message}`);
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Format the price as a proper decimal for the API
        const productToSubmit = {
            ...newProduct,
            price: parseFloat(newProduct.price)
        };

        try {
            const response = await fetch('api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productToSubmit)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Reset the form
            setNewProduct({
                name: '',
                price: '',
                category: '',
                inStock: true
            });

            // Refresh the product list
            fetchProducts();
        } catch (err) {
            setError(`Error adding product: ${err.message}`);
            console.error('Submit error:', err);
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`api/products/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Refresh the product list
            fetchProducts();
        } catch (err) {
            setError(`Error deleting product: ${err.message}`);
            console.error('Delete error:', err);
        }
    };

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className="products-container">
            <h1>Products</h1>

            {error && <div className="error-message">{error}</div>}

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <p className="category">Category: {product.category}</p>
                        <p className={`stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <button
                            className="delete-btn"
                            onClick={() => deleteProduct(product.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            <div className="add-product-form">
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min="0.01"
                            step="0.01"
                            value={newProduct.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            name="category"
                            value={newProduct.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Home">Home</option>
                            <option value="Books">Books</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group checkbox">
                        <input
                            type="checkbox"
                            id="inStock"
                            name="inStock"
                            checked={newProduct.inStock}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="inStock">In Stock</label>
                    </div>

                    <button type="submit" className="submit-btn">Add Product</button>
                </form>
            </div>
        </div>
    );
}