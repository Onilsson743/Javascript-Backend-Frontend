import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import AdminView from './pages/AdminView';
import AllProductsView from './pages/AllProductsView';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ShoppingCartView from './pages/ShoppingCartView';


function App() {


  return (
    <div >
      <BrowserRouter>
        <ShoppingCartProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shoppingcart' element={<ShoppingCartView />} />
            <Route path='/admin' element={<AdminView />} />
            <Route path='/products' element={<AllProductsView />} />
          </Routes>
        </ProductProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
