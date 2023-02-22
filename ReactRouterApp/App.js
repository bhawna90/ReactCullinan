import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product/:id' element={<Product></Product>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
