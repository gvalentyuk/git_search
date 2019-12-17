import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>
    <nav>
        <div className="nav-wrapper">
            <a href="/#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to={'/'}>Главная</Link>
                </li>
                <li>
                    <Link to={'/signup'}>Зарегестрироваться</Link>
                </li>
                <li>
                    <Link to={'login'}>Войти</Link>
                </li>
            </ul>
        </div>
    </nav>;

export default Header;