import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import index from './index';

const CartModal = ({ show, handleClose, handleCloseX, cart, handleRemoveFromCart, handleQuantityChange, handleProcessOrder }) => {
  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title me-auto mb-2 mb-lg-0">Shopping Cart</h5>
            <button type="button" className="close btn btn-outline-danger " onClick={handleCloseX}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="border shadow p-2 mb-2 ">
                  <div ><h6>{index + 1} </h6>{item.name} - <i>${item.price} </i>: <i>{item.quantity}</i> </div>
                  <div className='d-flex justify-content-between mt-4'>
                    <input 
                    className='form-control'
                    type="number" 
                    min="1" 
                    name='quantity'
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
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Delete All</button>
            <button type="button" className="btn btn-primary" onClick={handleProcessOrder}>Process Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
