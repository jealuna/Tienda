import React, { Component } from 'react';
import config from '../../config';

const uploadPath = config.API_PATH + 'archivoorden/';

export default class Inicio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {}
        }
    }

    onFileChangeHandler = (e) => {
        e.preventDefault();
        let selectedFile = e.target.files[0]
        const formData = new FormData();
        formData.append('file', selectedFile);
        fetch(uploadPath, {
            method: 'PUT',
            body: formData
        })
        .then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("El archivo se subió correctamente")
            }
        });
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <div className="form-group files color">
                                <label>Importar Archivo de Orden de Compra</label>
                                <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                            </div>
                    </div>
                </div>
            </div>
        )
      }
}