import React, { Component } from 'react';
import config from '../../config';

const path = config.API_PATH + 'almacenes/';

export default class Inicio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            almacenes: [],
            form: {}
        }

        this.sendForm = this.sendForm.bind(this)
        this.deleteAlmacen = this.deleteAlmacen.bind(this)
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
            .then(() => this.getalmacenes())
    }

    deleteAlmacen(ev) {
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
        .then(() => this.getalmacenes())
        .catch(err => console.log(err));
    }

    getalmacenes() {
        fetch(path)
        .catch(err => console.error(err))
        .then(res => res.json())
        .then(almacenes => this.setState({ almacenes }))
    }

    componentDidMount() {
        this.getalmacenes()
    }

    render() {        
            return(
                <div className="App container">
                    <br />
                    <div className="row">
                    <div className="Almacenes col">
                            <div className="card" style={{width: 18 + 'rem'}}>
                                <div className="card-body">
                                <form className="PostForm">
                                    <div className="form-group">
                                        <label htmlFor="subinventario">Subinventario</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="subinventario" 
                                            placeholder="Ingresa el numero del subinventario" 
                                            required
                                            onChange={(ev) => { this.setState({ form: { ...this.state.form, subinventario: ev.target.value } }) }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre del almacén</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="nombre" 
                                            placeholder="Nombre"
                                            required
                                            onChange={(ev) => { this.setState({ form: { ...this.state.form, nombre: ev.target.value } }) }}
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
                         this.state.almacenes.map((almacen) => (
                            <div key={almacen.subinventario} className="Almacenes col">

                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <div className="card-body">
                                        <form className="ElementForm">
                                        <label>Subinventario</label>
                                            <h5 className="card-title">{almacen.subinventario}</h5>
                                            <label>Nombre del almacén</label>
                                            <p className="card-text">{almacen.nombre}</p>
                                            <button 
                                                id={almacen.subinventario}
                                                type="submit" 
                                                className="btn btn-danger"
                                                onClick={this.deleteAlmacen}>Eliminar
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