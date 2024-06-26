import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jam from './Jam';
import NavBar from './NavBar';
import { Link, useParams } from 'react-router-dom';

export default function Producte() {

    const {id} = useParams();

    const [products, setProducts] = useState([]);

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
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:9090/product/deleteProduct/${id}`);
            loadProducts(); // Reload users after deletion
        } catch (error) {
            
            alert(`There was an error deleting the user with id ${id}!`);
        }
    };

    return (
        <div className="container-fluid">
            <NavBar />
            
            <div className="row content">
                <div className="col-sm-3 sidenav">
                    <Jam />
                </div>                              
                <div className="col-sm-9">
                    <h4><small>List of All Products</small></h4>
                    <hr />
                    <div className='container'>
                        <div className='py-4'>
                            <table className="table table-striped border shadow">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={product.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{product.id}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.price}</td>    
                                            <td>{product.description}</td>
                                            <td>
                                                <Link className='btn btn-outline-primary mx-2' to={`/updataproduct/${product.id}`}>Edit</Link>
                                                <button className='btn btn-danger mx-2' onClick={() => deleteUser(product.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='p-3 bg-secondary'>
                <h1>This is footer:</h1>
            </footer>
        </div>
    );
}
