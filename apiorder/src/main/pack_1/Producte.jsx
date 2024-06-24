//--
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import index from './../index';

//-
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Jam from './Jam';
import NavBar from './NavBar';



export default function Producte() {

    const [products, setUsers] = useState([]);

    useEffect(() => {
        loadProduct();

    },[]);

    const loadProduct = async () =>{

        const result = await axios.get("http://localhost:9090/product/allProduct");
        setUsers(result.data);
    };

  return (
    <>
        <NavBar />
        <Jam />
        <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((title, index)=>(
                        //--
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <th scope="row" key={index}>{index}+1</th>
                            <th scope="row">{title.id}</th>
                            <td>{title.titleProduct}</td>
                            <td>{title.price}</td>
                            <td>{title.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </>
  )
}

