import React from 'react'
import NavBar from "./NavBar";
import Resultados from "./Resultados";
import {Routes, Route} from "react-router-dom";
import Examenes from './Examenes';

function HomeDocente(props) {
  return (
    <div className='w-full'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/homedocente' component={HomeDocente}></Route>
        <Route path='/examenes' element={<Examenes></Examenes>} component={Examenes}></Route>
        <Route path='/resultados' element={<Resultados></Resultados>} component={Resultados}></Route>
      </Routes>
      <h1>{props.bienvenido}</h1>
    </div>
  )
}

export default HomeDocente