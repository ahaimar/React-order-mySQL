import React, { useState } from 'react'

export default function Body() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 15 },
        // Add more products as needed
      ]);
      const [selectedProducts, setSelectedProducts] = useState([]);
      const [orders, setOrders] = useState([]);
    
      // Function to add a product to selectedProducts
      const handleAddToCart = (product) => {
        setSelectedProducts([...selectedProducts, product]);
      };
    
      // Function to remove a product from selectedProducts
      const handleRemoveFromCart = (index) => {
        const newSelectedProducts = [...selectedProducts];
        newSelectedProducts.splice(index, 1);
        setSelectedProducts(newSelectedProducts);
      };
    
      // Function to process the order
      const handleProcessOrder = () => {
        // Assuming processing involves adding selected products to orders and clearing selectedProducts
        setOrders([...orders, selectedProducts]);
        setSelectedProducts([]);
        alert('Order processed successfully!');
      };
    
      return (
        <div className="container">
          <h2>Product List</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 mb-3" key={product.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          <hr />
    
          <h2>Selected Products</h2>
          <div className="row">
            {selectedProducts.map((product, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          {selectedProducts.length > 0 && (
            <div className="text-center mt-4">
              <button className="btn btn-success" onClick={handleProcessOrder}>
                Process Order
              </button>
            </div>
          )}
    
          <hr />
    
          <h2>Orders</h2>
          <div className="row">
            {orders.map((order, orderIndex) => (
              <div className="col-md-12 mb-3" key={orderIndex}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Order {orderIndex + 1}</h5>
                    <ul>
                      {order.map((product, productIndex) => (
                        <li key={productIndex}>{product.name} - ${product.price}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
