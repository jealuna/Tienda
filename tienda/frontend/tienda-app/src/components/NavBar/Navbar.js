import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" >Menu</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                    <li className={'nav-item ' + this.getNavLinkClass("/almacenes")}><NavLink className="nav-link" to="/almacenes">Almacenes</NavLink></li>
                    <li className={'nav-item ' + this.getNavLinkClass("/productos")}><NavLink className="nav-link" to="/productos">Productos</NavLink></li>
                    <li className={'nav-item ' + this.getNavLinkClass("/ordencompra")}><NavLink className="nav-link" to="/ordencompra">Órdenes de Compra</NavLink></li>
                </ul>
            </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;