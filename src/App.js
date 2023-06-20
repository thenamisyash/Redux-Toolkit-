import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './Components/Cart';
import { OrderCart } from './Components/OrderCart';
import { Navbar } from './Components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Cart />} />
        <Route path='/cart' element={<OrderCart />} />
      </Routes>
    </>
  );
}

export default App;
