import React, { Component } from 'react'
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Departamentos from './Components/Departamentos'
import CreateDepartamento from './Components/CreateDepartamento'
import MenuDepartamentos from './Components/MenuDepartamentos'
import DetallesDepartamento from './Components/DetallesDepartamento'
import DeleteDepartamento from './Components/DeleteDepartamento'
import UpdateDepartamento from './Components/UpdateDepartamento'

export default class Router extends Component {
  render() {
    function DetallesDepartamentoElement(){
        var {num,nom,loc} = useParams();
        return(
            //iddeperatamento, nombre, localidad SON INVENTADAS, Y VIENE DE DETALLES DEPARTAMENTO
            //POR EL this.props.iddepartamento
            <DetallesDepartamento iddepartamento={num}
            nombre={nom} localidad={loc}/>
        );
    }

    function DeleteDepartamentoElement(){
        var {id} = useParams();
        return(<DeleteDepartamento id={id}/>);
    }

    function UpdateDepartamentoElement(){
        var {iddepartamento} = useParams();
        return (<UpdateDepartamento id={iddepartamento}/>);
        
    }

    return (
      <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
            <Route path='/' element={<Departamentos/>}/>
            <Route path='/create' element={<CreateDepartamento/>}/>
            <Route path="/details/:num/:nom/:loc"
                element={<DetallesDepartamentoElement/>}/>
            <Route path='/delete/:id' element={<DeleteDepartamentoElement/>}/> 
            <Route path='/update/:iddepartamento' 
            element={<UpdateDepartamentoElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
