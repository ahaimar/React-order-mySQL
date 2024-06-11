import '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';

export default function Jam() {
  return (
    <div className="container">
        <div className="jumbotron">
            <h1>Order</h1>  
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>  
        </div>    
    </div>
  )
}
