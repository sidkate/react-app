import React, { FC } from 'react';
import Menu from '../menu/menu.component';
import './header.css';

const Header: FC = () => {
    return (
        <div className="header">
            <a className="header__logo" href=""><img className="header__logo" src="logo2.jpg" /></a>
            <Menu></Menu>
        </div>
    );
}

export default Header;