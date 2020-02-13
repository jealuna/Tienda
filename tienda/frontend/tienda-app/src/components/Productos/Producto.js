import React, { Component } from 'react';
import config from '../../config';

const path = config.API_PATH + 'productos/';

export default class Inicio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productos: [],
            form: {}
        }

        this.sendForm = this.sendForm.bind(this)
        this.deleteProducto = this.deleteProducto.bind(this)
    }

    sendForm(ev) {
        ev.preventDefault()

        fetch(
            path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(this.state.form)
        })
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(() => this.getProductos())
    }

    deleteProducto(ev) {
        ev.preventDefault()
        let id = ev.target.id
        let pathdelete = path + id + '/'
        fetch(
            pathdelete, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .then(() => this.getProductos())
        .catch(err => console.log(err));
    }

    getProductos() {
        fetch(path)
        .catch(err => console.error(err))
        .then(res => res.json())
        .then(productos => this.setState({ productos }))
    }

    componentDidMount() {
        this.getProductos()
    }

    render() {        
            return(
                <div className="App container">
                    <br />
                    <div className="row">
                    <div className="Productos col">
                            <div className="card" style={{width: 18 + 'rem'}}>
                                <div className="card-body">
                                <form className="PostForm">
                                    <div className="form-group">
                                        <label htmlFor="SKU">SKU</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="SKU" 
                                            placeholder="Ingresa el SKU del producto" 
                                            required
                                            onChange={(ev) => { this.setState({ form: { ...this.state.form, SKU: ev.target.value } }) }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descripcion">Nombre del almacén</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="descripcion" 
                                            placeholder="Descripcion"
                                            required
                                            onChange={(ev) => { this.setState({ form: { ...this.state.form, descripcion: ev.target.value } }) }}
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                        onClick={this.sendForm}>Agregar
                                    </button>
                                </form>
                                </div>
                            </div>
                    </div>
                    {
                         this.state.productos.map((producto) => (
                            <div key={producto.SKU} className="Productos col">

                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <div className="card-body">
                                        <form className="ElementForm">
                                        <label>SKU</label>
                                            <h5 className="card-title">{producto.SKU}</h5>
                                            <label>Descripción</label>
                                            <p className="card-text">{producto.descripcion}</p>
                                            <button 
                                                id={producto.SKU}
                                                type="submit" 
                                                className="btn btn-danger"
                                                onClick={this.deleteProducto}>Eliminar
                                            </button>
                                            </form>
                                        </div>
                                    </div>

                            </div>
                         ))
                    }
                    </div>
                </div>  
            ) 
    } 
}