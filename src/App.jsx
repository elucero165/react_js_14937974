import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailcontainer';
import { CartProvider } from './context/Cartcontext/CartProvider';
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} /> 
          <Route path='/category/:category' element={<ItemListContainer titulo='Categoría' />} /> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/admin' element={<ProductFormContainer />} /> 
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
