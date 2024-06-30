import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartIcon = ({ itemCount, handleClick }) => {
  return (
    <div className="cart-icon position-fixed bottom-0 end-0 m-3" onClick={handleClick}>
      <button className="btn btn-primary position-relative">
        {itemCount === 0 ? (
          <i className="bi bi-cart"></i>
        ) : (
          <i className="bi bi-cart-fill"></i>
        )}
        {itemCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartIcon;
