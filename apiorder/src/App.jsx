
//-- property of project
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//-- the long of Customer 
import Main from './main/pack_/main';
import AddUser from './main/pack_/addUser';
import EditUser from './main/pack_/EditUser';

//--the long od produces the
import Product from './main/pack_1/Producte';
import AddProduct from './main/pack_1/addProduct';

//-- the long of Orders
import Home from './main/home';
import Login from './main/index';

//-- the long of no page items
import NoPage from './main/NoPage';

function App() {

  return (
    <div className='App'>
      
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route exact path='/' element={<Login/>} />
          
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/AddUser' element={<AddUser />} />
          <Route exact path='/UpdateUser/:cin' element={<EditUser />} />
          
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/addProduct' element={<AddProduct />} />
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
