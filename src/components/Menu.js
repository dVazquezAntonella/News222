import React, { Component } from 'react';
import iconcuenta from '../assets/img/iconcuenta.png';
import iconnews from '../assets/img/iconnews.png'
import iconmundo from '../assets/img/iconmundo.png'
import { NavLink } from 'react-router-dom';



class Menu extends Component {


    render() {
        return (
            <div className="header">
                <div className="icons">
                <NavLink to="/mundiales" ><img src={iconmundo} alt="" /></NavLink>
                    <NavLink to="/noticias" ><img src={iconnews} alt="" /></NavLink>
                    <NavLink to="/cuenta" ><img src={iconcuenta} alt="" /></NavLink>

                </div>
            </div>

        );
    }


}

export default Menu;