import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//--
import Searsh from './Searsh';

export default function OrderMain() {

    const {id} = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const result = await axios.get("http://localhost:9090/order/getAllOrder");
            setOrders(result.data);
        } catch (error) {
            console.error("There was an error loading the orders!", error);
        }
    };
    const deleteOrder = async (id) => {
        try {
            await axios.delete(`http://localhost:9090/order/deleteOrder/${id}`);
            loadOrders(); // Reload users after deletion
        } catch (error) {
            
            alert(`There was an error deleting the user with id ${id}!`);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Order</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={`/main`}>Home</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                <div className="row content mt-3">
                    <div className="col-sm-3 sidenav">
                        <Searsh />
                    </div>
                    <div className="col-sm-9">
                        <h4><small>List of All Orders</small></h4>
                        <hr />
                        <div className="container">
                            <div className="py-4">
                            <table className="table table-striped-columns border shadow">
                                    <thead>
                                        <tr>
                                            
                                            <th scope="col">#</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date Order</th>
                                            <th scope="col">Customer Id</th>
                                            <th scope="col">Supplier Id</th>
                                            <th scope="col">Product Id</th>
                                            <th scope="col">Quantity</th>
                                            
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order, index) => (
                                            <tr key={index}>
                                                
                                                <th scope="row">{index + 1}</th>

                                                <td>{order.id}</td>

                                                <td>{order.eventDateTime}</td>
                                                
                                                <td>{order.customer.id}</td>
                                                
                                                <td>{order.supplier.id}</td>
                                                
                                                <td>{order.product.id}</td>
                                                
                                                <td>{order.quantity}</td>

                                                <td>
                                                    <Link
                                                    
                                                        className="btn btn-outline-primary mx-2"
                                                        to={`/updateOrder/${order.id}`}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => {
                                                            deleteOrder(order.id);
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="p-3 bg-secondary">
                    <h1>This is footer:</h1>
                </footer>
            </div>
        </>
    );
}
