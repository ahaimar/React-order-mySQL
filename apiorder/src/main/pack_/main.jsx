import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import Jam from './jam';

export default function Main() {

    const {id} = useParams();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:9090/customer/getAllCustomers");
            setUsers(result.data);
        } catch (error) {
            console.error("There was an error loading the users!", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:9090/customer/deleteCustomer/${id}`);
            loadUsers(); // Reload users after deletion
        } catch (error) {
            
            alert(`There was an error deleting the user with id ${id}!`);
        }
    };

    return (
        <div className="container-fluid">
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <h2 className="navbar-brand">Order</h2>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/main">Customer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/order">Order</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/supplier">Supplier</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Product</Link>
                                </li>
                            </ul>
                            <Link className="btn btn-outline-success mt-2 me-2" to="/AddUser">Add User</Link>
                        </div>
                    </div>
                </nav>
                
            </div>
            <div className="row content">
                <div className="col-sm-2 sidenav">
                <Jam />
                </div>
                <div className="col-sm-10">
                    <h4><small>List of All Customers</small></h4>
                    <hr />
                    <div className='container'>
                        <div className='py-4'>
                            <table className="table table-striped border shadow">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (

                                        <tr key={index}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td>{user.age}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                              <Link className='btn btn-outline-primary mx-2' to={`/UpdateUser/${user.id}`}>Edit</Link>
                                              <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>
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
            <footer className='p-3 bg-secondary'>
                <h1>This is footer:</h1>
            </footer>
        </div>
    );
}