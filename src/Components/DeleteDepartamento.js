import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class DeleteDepartamento extends Component {

    state ={
        status:false
    }

    deleteDepartamento=(e) =>{
        e.preventDefault();
        var numero = this.props.id;
        var request = "/api/departamentos/" + numero;
        var url = Global.urlDepartamentos + request;
        axios.delete(url).then(response =>{
            this.setState({
                status:true
            });
        });
    }   

  render() {
    //TENEMOS QUE DIBUAR AQUI EL <h2>
    //UN IF CON EL STATE
    if(this.state.status == true){
        return(<Navigate to="/"/>);
    }
    return (
      <div>
        <h1>
            ¿Delete Departamento: <span style={{color:"red"}}>
                 {this.props.id}
            </span>
        </h1>
        <form onSubmit={this.deleteDepartamento}>
            <button className='btn btn-danger'>
                Eliminar departamento
            </button>
        </form>
      </div>
    )
  }
}
