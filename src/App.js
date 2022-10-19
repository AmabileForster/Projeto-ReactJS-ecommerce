import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';


const Cart = lazy(() => import('./pages/cart/cart'));
const Catalog = lazy(() => import('./pages/catalog/catalog'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));
const Login = lazy(() => import('./pages/login/login'));
const Product = lazy(() => import('./pages/product/product'));
const Register = lazy(() => import('./pages/register/register'));
const NotFound = lazy(() => import('./pages/not-found/not-found'));

function App() {
  useEffect(() => {
 
  }, [])

  return (
    <Router>
      <AppBar position={'static'} style={{backgroundColor: '#f7b0b8'}}>
        <Toolbar style={{
          justifyContent: 'space-between'
        }} >
          <Typography variant='h6' component='h2'>
            <Link to="/" style={{ textDecoration:'none', color:'white' }}>Loja virtual</Link>
          </Typography>
          <div>
            <IconButton>
              <Link to="/cart"><ShoppingCartIcon style={{color: 'white'}} /></Link>
            </IconButton>
            <IconButton><Link to="/login">
              <LogoutIcon style={{color: 'white'}} /></Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
          <Suspense fallback={'Carregando...'}>
            <Routes>
              <Route exact path="/" element={<Catalog/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/catalog" element={<Catalog/>}/>
              <Route exact path="/checkout" element={<Checkout/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route path="/product/:id" element={<Product/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Suspense>
    </Router>
  );
}

export default App;