import React from 'react'
import { Link } from 'react-router-dom'

export default function navBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <h4 className="navbar-brand" href="#">Product Formation</h4>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="btn mt-2 me-2 nav-link active" to="/addProduct">Add Product</Link>
                </li>
      
                <li className="nav-item">
                <Link className="btn mt-2 me-2 nav-link active" to="/main">Main !</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
