import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Order</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/main">User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pack_1/order">Order</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pack_2/supplier">Supplier</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pack_3/article">Article</Link>
              </li>
            </ul>
            <Link className="btn btn-outline-success mt-2 me-2" to="/AddUser">Add User</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
