import React, { FC } from 'react';
import './menu.css';

const Menu: FC = () => {
    return (
        <ul className="menu-main">
            <li className="menu-main__home"><a>Главная</a></li>
            <li className="menu-main__catalog _active"><a>Каталог</a></li>
            <li className="menu-main__basket"><a id="basket">0</a></li>
        </ul>
    );
}

export default Menu;