import React, { Component } from 'react';
import { Route } from "react-router";
import Almacen from './components/Almacenes'
import Producto from './components/Productos'
import OrdenCompra from './components/OrdenesCompra'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./components/NavBar/Navbar"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route path="/almacenes" component={Almacen} />
            <Route path="/productos" component={Producto} />
            <Route path="/ordencompra" component={OrdenCompra} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
