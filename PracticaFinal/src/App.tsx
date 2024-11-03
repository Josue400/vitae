
//import './App.css'
import Consulta from './Component/Consulta'
import Listar from './Component/Listar'
import Actualizar from './Component/Actualizar'
import Ingreso from './Component/Ingreso'
import { Routes, Route } from 'react-router-dom'



function App() {
  

  return (
    <>
    
      <Routes>

        
        <Route path='/Consulta' element={<Consulta/>}/>
        <Route path='/Listar' element={<Listar/>}/>
        <Route path='/Actualizar' element={<Actualizar/>}/>
        <Route path='/Ingreso' element={<Ingreso/>}/>
     
      </Routes>
    </>
  )
}

export default App
