import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../styles/Navigation.css';


// można stworzyć elementy nawigacji jak w poprzednim projekcie ale można też za pomocą tablicy na zewnątrz komponentu
const list = [
    {name: "start", path: "/", exact: true},
    {name: "produkty", path: "/products"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admina", path: "/login"}, // path: "/admin"
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return ( 
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;