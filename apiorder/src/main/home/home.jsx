import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavBar from './Nav';
import CartIcon from './CartIcon';

import CartModal from './CartModal ';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const result = await axios.get("http://localhost:9090/product/getAllProduct");
      setProducts(result.data);
    } catch (error) {
      console.error("There was an error loading the products!", error);
    }
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 }
        : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    setCart(cart.map(item => 
      item.id === productId
      ? { ...item, quantity: parseInt(quantity) }
      : item
    ));
  };

  const handleProcessOrder = () => {
    alert('Order processed successfully!');
    setCart([]);
    setShowModal(false);
  };

  return (
    <div>
      <div className='mb-5'>
        <NavBar />
      </div>
      
      <div className="row mt-5">
        <div className="col-sm-2">
          <div id="mySidenav" className="sidenav m-2">
            <p id="about" className="text-uppercase">Shopping Cart</p>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="container">
            <div className="row">
              {products.map((product, index) => (
                <div className="col-md-3 shadow mb-3" key={index}>
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <div className="panel-body">
                        <img className="img-thumbnail" src="https://via.placeholder.com/150" alt="" />
                      </div>
                      <i>{product.productName}</i>
                      <p>{product.description}</p>
                    </div>
                    <div className="panel-footer">
                      <i className="m-1">${product.price}</i>
                      <button
                        className="btn btn-warning m-1"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br /><br />
        </div>
      </div>

      <CartIcon itemCount={cart.length} handleClick={() => setShowModal(true)} />

      <CartModal
        show={showModal}
        handleClose={() => {setShowModal(false)
          setCart([]);}
        }
        handleCloseX={() =>{setShowModal(false)}}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleQuantityChange={handleQuantityChange}
        handleProcessOrder={handleProcessOrder}
      />

      <footer className="container-fluid text-center">
        <p>Online Store Copyright</p>
        <form className="form-inline">Get deals:
          <input type="email" className="form-control" size="50" placeholder="Email Address" />
          <button type="button" className="btn btn-danger">Sign Up</button>
        </form>
      </footer>
    </div>
  );
};

export default Home;
