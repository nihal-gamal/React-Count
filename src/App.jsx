
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from "./pages/count/count";
import {BrowserRouter ,Route,Routes} from'react-router-dom';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import About from './pages/about/about';
import NavComponent from './components/navbar/navbar';
import Products from './pages/shop/products';
import Todo from './pages/todo/Todo';
import Register from './pages/Register/index';

function App() {
  
  return (
    <div >
      <BrowserRouter>
        <NavComponent/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/count' element={<Count/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop/:id' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
