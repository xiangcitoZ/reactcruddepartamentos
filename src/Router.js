import React, { Component } from 'react'
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Departamentos from './Components/Departamentos'
import CreateDepartamento from './Components/CreateDepartamento'
import MenuDepartamentos from './Components/MenuDepartamentos'
import DetallesDepartamento from './Components/DetallesDepartamento'

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

    return (
      <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
            <Route path='/' element={<Departamentos/>}/>
            <Route path='/create' element={<CreateDepartamento/>}/>
            <Route path="/details/:num/:nom/:loc"
                element={<DetallesDepartamentoElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
