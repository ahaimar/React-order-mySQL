
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
import UpDataProduct from './main/pack_1/EditProduct';

//-- the long of Orders
import Order from './main/pack_3/OrderMain';
import UpDateOrder from './main/pack_3/EditOrder'

//-- the supplier  
import Supplier from './main/pack_2/supplierMain';
import AddSupplier from './main/pack_2/addSupplier';
import EditSupplier from './main/pack_2/EditSupplier';

//-- the long of Home
import Home from './main/home/home';
import Body from './main/home/Body';
import Profile from './main/home/Profile';
import { UserProvider } from './main/home/UserContext';

import NoPage from './main/NoPage';//-- the long of no page items

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/body' element={<Body />} />

          <Route exact path='/main' element={<Main />} />
          <Route exact path='/AddUser' element={<AddUser />} />
          <Route exact path='/UpdateUser/:id' element={<EditUser />} />
          
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/addProduct' element={<AddProduct />} />
          <Route exact path='/updataproduct/:id' element={<UpDataProduct />} />

          <Route exact path='/supplier' element={<Supplier />} />
          <Route exact path='/addSupplier' element={<AddSupplier />} />
          <Route exact path='/updateSupplier/:id' element={<EditSupplier />} />

          <Route exact path='/order' element={<Order />} />
          <Route exact path='/updateOrder/:id' element={<UpDateOrder />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
