import {BrowserRouter, Route, R} from 'react-router-dom';

import './App.css'
import Router from 'router-dom';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItmemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailcontainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={ItemListContainer} />
          <Route path='/detail/:id' element={ItemDetailContainer} />  
        </Routes>

      </BrowserRouter>
    </>  
  );

 
}

export default App
