import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import Jam from './Jam';
import NavBar from './NavBar';

export default function SupplierMain() {

    const {id} = useParams();
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        loadSuppliers();
    }, []);

    const loadSuppliers = async () => {
        try {
            const result = await axios.get("http://localhost:9090/supplier/getSuppliers");
            setSuppliers(result.data);
        } catch (error) {
            console.error("There was an error loading the suppliers!", error);
        }
    };

    const deleteSupplier = async (id) => {
        try {
            await axios.delete(`http://localhost:9090/supplier/deleteSupplier/${id}`);
            loadSuppliers(); // Reload suppliers after deletion
        } catch (error) {
            alert(`There was an error deleting the supplier with id ${id}!`);
        }
    };

    return (
        <>
            <NavBar />
            
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav">
                        <Jam />
                    </div>
                    <div className="col-sm-9">
                        <h4><small>List of All Suppliers</small></h4>
                        <hr />
                        <div className='container'>
                            <div className='py-4'>
                                <table className="table table-striped border shadow">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Supplier Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {suppliers.map((supplier, index) => (
                                            <tr key={index}>
                                                <th scope="row">{supplier.id}</th>
                                                <td>{supplier.supplierName}</td>
                                                <td>{supplier.supplierPhone}</td>
                                                <td>{supplier.supplierEmail}</td>
                                                <td>
                                                    <Link className='btn btn-outline-primary mx-2' to={`/updateSupplier/${supplier.id}`}>Edit</Link>
                                                    <button className='btn btn-danger mx-2' onClick={() => deleteSupplier(supplier.id)}>
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
        </>
    );
}
