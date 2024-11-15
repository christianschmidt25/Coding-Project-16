import React from 'react'
import products from './App.jsx'
import './ProductItem.jsx'

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                <ProductItem key={product.id} product={product} />
                ))}
            </ul>
            </div>
    );
};

export default ProductList;