import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CartModal = ({ show, handleClose, handleCloseX, cart, handleRemoveFromCart, handleQuantityChange, handleProcessOrder, customer, supplier }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [order, setOrder] = useState({
    supplier: '',
    product: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // You can fetch order data or other initialization code here if needed
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9090/order/addAllOrders`, cart);
      alert('Order added successfully!!');
      navigate('/order');
    } catch (error) {
      console.error('There was an error adding the Order!', error);
      alert(`There was an error updating the Order! ${error.response ? error.response.data : error.message}`);
    }
  };

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title me-auto mb-2 mb-lg-0">Shopping Cart</h5>
            <button type="button" className="close btn btn-outline-danger" onClick={handleCloseX}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Customer: {customer}</p>
            <p>Supplier: {supplier}</p>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="border shadow p-2 mb-2">
                  <div>
                    <i>Product ID: {item.id}</i>
                    <h6>Product: {item.productName}</h6>
                    <i>Price: ${item.price}</i> - 
                    <i> Quantity: {item.quantity}</i>
                  </div>
                  <div className='d-flex justify-content-between mt-4'>
                    <input 
                      className='form-control'
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                    />
                    <button className="btn btn-danger btn-sm m-1" onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Delete All</button>
              <button type="submit" className="btn btn-primary" onClick={handleProcessOrder}>Process Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
