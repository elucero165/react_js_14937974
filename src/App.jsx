import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItmemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailcontainer';
import { CartProvider } from './context/Cartcontext/CartProvider';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />  
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
