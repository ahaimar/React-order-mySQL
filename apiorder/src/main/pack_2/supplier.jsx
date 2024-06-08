
import { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import axios from 'axios';

export default function Main(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{

      loadUsers();
    }, []);

    const loadUsers=async()=>{
        const result =await axios.get("http://localhost:9090/sopplier/getSuppliers");
        setUsers(result.data);
    }
    return(
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <h4>you Blog</h4>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Blog.."/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </div>

          <div className="col-sm-10">
            <h4><small>List The All Customers</small></h4>
            <hr/>
            <div className='container'>
                <div className='py-4'>
                  <table className="table table-striped border shadow">
                    <thead>
                        <tr>
                          <th scope="col">Cin</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Phone</th>
                          <th scope="col">email</th>
                          <th scope="col">nomberSupplier</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {users.map((user, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.ferstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.address}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                          </tr>
                        ))}
                      
                    </tbody>
                  </table>
                </div>
                    
            </div>
            <br/>
            </div>
              <div className="col-sm-2 text-center">
                <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar"/>
              </div>
        </div>
      </div>
    );
}
