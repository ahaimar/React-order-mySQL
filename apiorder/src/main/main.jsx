//
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
//import '../../node_modules/bootstrap-icons/icons/';
//import { Icon } from '@iconify/react';
//import bootstrapIcon from '@iconify-icons/bootstrap/';

export default function Main(){

    return(
      <div className="container-fluid">
  <div className="row content">
    <div className="col-sm-3 sidenav">
      <h4>you Blog</h4>
      <ul className="nav nav-pills nav-stacked">
        <li className="active"><a href="#section1">Home</a></li>
        <li><a href="#section2">Friends</a></li>
        <li><a href="#section3">Family</a></li>
        <li><a href="#section3">Photos</a></li>
      </ul><br/>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search Blog.."/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>

    <div className="col-sm-9">
      <h4><small>RECENT POSTS</small></h4>
      <hr/>
      <div className='container'>
          <div className='py-4'>
            <table className="table table-striped border shadow">
              <thead>
                    <tr>
                      <th scope="col">Cin</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Phine</th>
                      <th scope="col">Email</th>
                      <th scope="col">Adress</th>
                      <th scope="col">City</th>
                      <th scope="col">State</th>
                      <th scope="col">Actio */* </th>
                    </tr>
              </thead>
              <tbody>
                <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>
                        <div className='input-group'>
                          <button type='SabMit'  className="form-control"placeholder='delete'>delet</button>
                          <button type='SabMit'  className="form-control"placeholder='delete'>up data</button>
                        </div>
                      </td>
                </tr> 
              </tbody>
            </table>
          </div>
              
      </div>
        <br/>
        </div>
        <div className="col-sm-2 text-center">
          <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar"/>
        </div>
        <div className="col-sm-10">
          <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
          <p>I am so happy for sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
          <p><span className="badge">1</span> Comment:</p><br/>
          <div className="row">
            <div className="col-sm-2 text-center">
              <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar"/>
            </div>
            <div className="col-xs-10">
              <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
              <p>Me too! WOW!</p>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
