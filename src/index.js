import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Topbar } from "./components/topBar"
import { App3 } from "./home"
import { App4 } from "./components/aboutUs"
import Footer from './components/footer';
import CheckoutPage from "./components/CheckoutPage"
// import Product from './components/Product';
import Navbar from './components/NavBar';
import Products from './components/Products';
import Movements from './components/Movements'
// import { Check } from '@material-ui/icons';
import IngresarProductos from './components/IngresarProductos';

import './styles.css'
import './bootstrap.min.css'

//Switch de React Router para habilitar navegacion por las paginas
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//StateProvider encargado de permitir la intercomunicacion entre componentes 
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />

        <Routes>
          <Route path='/checkout-page' element={<CheckoutPage />} />
          <Route path='/products' element={<div className='container-xxl'><Products /></div>} />
          <Route path='/movements' element={<div className='container-xxl'><Movements /></div>} />
          <Route path='/ingress_products' element={<div>< IngresarProductos centered /></div>} />
          <Route path='/' element={[<App3 />,<App4 />]} />
          
        </Routes>
      </StateProvider>
      <footer><Footer /></footer>
    </BrowserRouter>

  </React.StrictMode>
);
