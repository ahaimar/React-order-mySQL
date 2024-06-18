
//--
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//--
import Main from './main/pack_/main';
import AddUser from './main/pack_/addUser';
import EditUser from './main/pack_/EditUser';
import Login from './main/index';
import Home from './main/home';
import NoPage from './main/NoPage';




function App() {

  return (
    <div className='App'>
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route index element={<Home/>} />
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/AddUser' element={<AddUser />} />
          <Route exact path='/UpdateUser/:cin' element={<EditUser />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
