import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from '../components/details/Details';
import Header from "../components/header/Header";
import Products from "../pages/products/Products";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Register from '../pages/register/Register';
import Error from '../pages/error/Error';
import Acess from '../pages/register/Acess';
import Cart from '../components/cart/Cart';
import Payment from '../pages/payment/Payment';

const Routerx = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                < Route path='/' element={<Home />} />
                < Route path='products' element={<Products />} />
                < Route path='products/:id' element={<Details />} />
                < Route path='/about' element={<About />} />
                < Route path='/contact' element={<Contact />} />
                < Route path='/login' element={<Acess />} />
                < Route path='/acess' element={<Register />} />
                < Route path='/cart' element={<Cart />} />
                < Route path='/payment' element={<Payment />} />
                < Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routerx
