import React, { useContext, useState } from 'react'
import Menu from "../svg/bars-solid.svg"
import Close from "../svg/times-solid.svg"
import { Link } from 'react-router-dom'
import Cart from "../svg/cart.svg"
import { DataContext } from '../dataProvider/DataProvider'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">🌖MoonShop</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/products">Produtos</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li><Link to="/login">Já tem cadastro?</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="fechar" width="30" className="menu" />
                </li>
            </ul>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="menu" width="30" />
            </div>
            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
        </header>
    )
}

export default Header
