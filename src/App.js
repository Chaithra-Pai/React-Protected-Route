import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import { Home } from './pages/Home';
import { Products } from './pages/Products';


function App() {
  return (
    <div className="App">
      <h1>Protected Router</h1> 
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route element={<PrivateRoutes/>} >
          <Route path='/' element={<Home/>} exact/>
          {/* <Route path='/product' element={<Products/>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
