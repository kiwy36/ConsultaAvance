import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Root from './routes/Root';
import ItemDetailContainerRoot from './routes/ItemDetailContainerRoot';
import CartWidget from './components/CartWidget/CartWidget';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <BrowserRouter>
            <CustomNavbar />
            <Footer/>
            <Routes>
                <Route exact path="/" element={<Root />} />
                <Route exact path="/category/:id" element={<Root />} />
                <Route exact path="/item/:id" element={<ItemDetailContainerRoot />} />
                <Route exact path="/cart" element={<CartWidget />} />
                <Route exact path="/checkout" element={<div/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
