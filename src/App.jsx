import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { ShopContextProvider } from './context/Context';
import About from './pages/About';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import Success from './pages/Success';


function App() {
  

  return (
    <div className='app'>
      <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/success" element={<Success/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;