
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './mainpages/Home';
import { Signup } from './mainpages/Signup';
import { Login } from './mainpages/Login';
import { Deshboard } from './Data/Deshboard';
import { UserNvabar } from './Data/UserNvabar';
import { Add_blog } from './Data/Add_blog';





function App() {
  return (
     <Router>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Userdeshboard' element={<Deshboard/>}></Route>
        <Route path='/usernvabar' element={<UserNvabar/>}></Route>
        <Route path='/addblog' element={<Add_blog/>}></Route>
        <Route path='/manage' element={</>}></Route>




        


      </Routes>
     </Router>
  );
}

export default App;
