import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();


    state = {
        //EN ESTE CASO ES OBJETO POR ESO LLEVBA {}
        departamento: {},
        status: false,
        statusUpdate: false
    }

    buscarDepartamento = () => {
        var id = this.props.id;
        var request = "/api/departamentos/" + id;
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
                status: true
            });
        });
    }

    updateDepartamento = (e) => {
        e.preventDefault();
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadRef.current.value;
        //REACT YA PERMITE DECLARAR OBJETOS CON FORMATO JSON
        //DECLARAMOS UN OBJETO CON LAS PROPIEDADES DEL API JSON
        var departamento = {
            numero: num,
            nombre: nom,
            localidad: loc
        };
        //EN axios EL METODO POST RECIBE DOS PARAMETROS
        // 1) URL DEL API
        // 2) OBJETO JSON PARA EL API
        axios.put(url, departamento).then(response => {
            this.setState({
                statusUpdate: true,
                mensaje: "Departamento cambiado"
            })
        })
    }

    componentDidMount = () => {
        this.buscarDepartamento();
    }



    render() {
        if (this.state.statusUpdate == true) {
            //PARA REDIRIGIR LA PAGINA LA PRINCIPIO/ NECESITAS HACER IMPORT
            return (<Navigate replace to="/" />)
        }
        return (
            <div>
                <h1>Update Departamento</h1>
                {this.state.status && (
                    <form style={{ width: "500px", margin: "0 auto" }}>
                        <input type="hidden" value={this.state.departamento.numero}
                            ref={this.cajaNumeroRef} />
                        <label>Nombre: </label>
                        <input type="text" placeholder={this.state.departamento.nombre}
                            className='form-control' ref={this.cajaNombreRef} /> <br />
                        <label>Localidad: </label>
                        <input type="text" placeholder={this.state.departamento.localidad}
                            className='form-control' ref={this.cajaLocalidadRef} /> <br />
                        <button className='btn btn-info' onClick={this.updateDepartamento}>
                            Modificar departamento
                        </button>
                    </form>
                )}
                <br />
                {
                    this.state.statusUpdate &&
                    <h2 style={{ color: "blue" }}>{this.state.mensaje}</h2>
                }
            </div>
        )
    }

}
