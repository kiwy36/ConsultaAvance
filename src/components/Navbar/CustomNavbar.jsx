import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './CustomNavbar.css';
import CartWidget from '../CartWidget/CartWidget';

const CustomNavbar = () => {
    const { getCartTotal } = useContext(CartContext);
    const redirectToHome = () => {
        window.location.href = "/";
    }

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand className="justify-content-start">
                    <Nav.Link variant="dark" onClick={redirectToHome}>
                        <h1>TIENDA DE BICIS</h1>
                    </Nav.Link>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/category/bici"><h2>Bicicletas</h2></Nav.Link>
                    <Nav.Link href="/category/accesorios"><h2>Accesorios</h2></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart"><h2>🛒{getCartTotal() !== 0 && (<span className="cartTotal">{getCartTotal()}</span>)}$</h2></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
















/*
import { Navbar, Container, Nav } from 'react-bootstrap';
import './CustomNavbar.css'; // Ruta relativa al archivo de estilos

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand className="justify-content-start"><h1>Tienda de bicis</h1></Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/"><h2>Inicio</h2></Nav.Link>
                    <Nav.Link href="/category/bici"><h2>Bicicletas</h2></Nav.Link>
                    <Nav.Link href="/category/acsesorio"><h2>Accesorios</h2></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/cartWidget"><h2>🛒7</h2></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;

*/























/*
const Navbar = () => {
    return (
        <nav id='nav' className='navbar'>
            <div className="logo">Tienda de bicis</div>
            <ul className="nav-items">
                <li className="nav-item"><a href="/">Inicio</a></li>
                <li className="nav-item"><a href="/category/bici">Bicicletas</a></li>
                <li className="nav-item"><a href="/category/acsesorio">Accesorios</a></li>
                <li className="nav-item"><a href="/cartWidget">🛒7</a></li>
            </ul>
        </nav>
    )
}

export default Navbar


import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
function Navbar(){
    return(
        <div className='navbar navbar-lg styleNav'>
            <div id='nav'className='container-fluid'>
                <h1 id='title'>Navbar no-Responsive</h1>
                    <Nav className='styleNav'>
                        <Nav.Link className='button'>
                            <NavLink to={"/"}>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link className='button'>
                            <NavLink to={"/category/bici"}>bicicleta</NavLink>
                        </Nav.Link>
                        <Nav.Link className='button'>
                            <NavLink to={"/category/acsesorio"}>acsesorio</NavLink>
                        </Nav.Link>
                        <Nav.Link className='button'>
                            <NavLink to={"/cart"}> 🛒</NavLink>
                        </Nav.Link>
                    </Nav>
            </div>
        </div>
    );
}

export default Navbar
*/