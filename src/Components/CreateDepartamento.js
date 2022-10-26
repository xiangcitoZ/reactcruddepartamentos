import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

    cajaNumeroRef= React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef= React.createRef();

    state = {
        mensaje:"",
        status: false
    }

    insertDepartamento = (e) => {
        e.preventDefault();
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos+request;
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
        axios.post(url,departamento).then(response =>{
            this.setState({
                status:true,
                mensaje:"Departamento insetado"
            })
        })

    }

  render() {
    if(this.state.status == true){
        //PARA REDIRIGIR LA PAGINA LA PRINCIPIO/ NECESITAS HACER IMPORT
        return(<Navigate replace to="/" />)
    }
    return (
      <div>
        <h1>Create Departamento</h1>
        <form >

            <label>Número: </label>
            <input style={{textAlign:"center"}} type="number" className='form-control'
            ref={this.cajaNumeroRef} required/><br/>
            <label>Nombre: </label>
            <input style={{textAlign:"center"}} type="text" className='form-control'
            ref={this.cajaNombreRef} required/><br/>
            <label>Localidad: </label>
            <input style={{textAlign:"center"}} type="text" className='form-control'
            ref={this.cajaLocalidadRef} required/><br/>

            <button className='btn btn-info' onClick={this.insertDepartamento}>
                Insertar departamento
            </button>
        
        </form>
        <h2 style={{color:"blue"}}>
            {this.state.mensaje}
        </h2>
      </div>
    )
  }
}
