import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditSupplier() {
  

    const navigate = useNavigate();
    const { id } = useParams();

    const [supplier, setSupplier] = useState({
        id: '',
        supplierName: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        setSupplier({ ...supplier, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadSupplier();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:9090/supplier/updateSupplier/${id}`, supplier);
            alert('supplier updated successfully !!');
            navigate('/supplier');   
        } catch (error) {
            console.error('There was an error updating the supplier!', error);
            alert(`There was an error updating the supplier! ${error.response ? error.response.data : error.messprice}`);
        }
    };

    const loadSupplier = async () => {
        try {
            const result = await axios.get(`http://localhost:9090/supplier/getSupplierById/${id}`);
            setSupplier(result.data);
        } catch (error) {
            console.error('There was an error loading the supplier!', error);
        }
    };

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>Edit Supplier</h2>
                    <form onSubmit={handleSubmit}>
        
                    <div className='form-group'>
                            <label htmlFor='supplierName'>Supplier Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add First Name'
                                name='supplierName'
                                value={supplier.supplierName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='supplierPhone'>Supplier phone</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Phone'
                                name='supplierPhone'
                                value={supplier.supplierPhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='supplierEmail'>Supplier Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Add Email'
                                name='supplierEmail'
                                value={supplier.supplierEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <button className='btn btn-outline-primary' type='submit'>Save</button>
                            <button className='btn btn-outline-danger' type='button' onClick={() => setSupplier({
                                
                                supplierName: '',
                                supplierPhone: '',
                                supplierEmail: ''
                            })}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>the Suppliers</h2>
            </aside>
        </div>
    );
}
