import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/" >Menu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                    {/* <li className={this.getNavLinkClass("/")}><NavLink to="/" >Listar</NavLink></li> */}
                    <li class="nav-item" className={this.getNavLinkClass("/almacenes")}><NavLink class="nav-link" to="/almacenes">Almacenes</NavLink></li>
                </ul>
            </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;