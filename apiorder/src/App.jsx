import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './main/main.jsx';
import NavBar from './main/navbar.jsx';
import Jam from './main/jam.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './main/addUser';
import EditUser from './main/EditUser.jsx';


function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Jam/>
        <Routes>
          <Route exact path='/main' element={<Main/>} />
          <Route exact path='/AddUser' element={<AddUser />} />
          <Route exact path='/UpdateUser/:id' element={EditUser} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
