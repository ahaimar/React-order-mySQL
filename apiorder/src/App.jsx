import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main/pack_/main';
import AddUser from './main/pack_/addUser';
import EditUser from './main/pack_/EditUser';
import NavBar from './main/pack_/navbar';
import Jam from './main/pack_/jam';



function App() {

  return (
    <div className='App'>
      
      <Router>
        <NavBar />
        <Jam />
        <Routes>
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/AddUser' element={<AddUser />} />
          <Route exact path='/UpdateUser/:cin' element={<EditUser />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
