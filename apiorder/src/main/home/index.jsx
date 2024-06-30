import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function index() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="cin">Cin</label>
                  <input type="text" className="form-control" id="cin" placeholder="Enter cin" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter Name" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="email@gmail.com" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className='container row justify-content-center m-1'>
                  <Link type="submit" className="btn btn-primary m-2" to={`/home`}>Login</Link>
                  <Link type="submit" className="btn btn-info m-2" to={`/home`}>Sing up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
