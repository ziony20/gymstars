import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio';
import Log from './paginas/login'
import Inicio_sesion from './paginas/inicio_sesion'
import Registro from './paginas/registro'
import Conocenos from './paginas/entrenadores'
import Dietas from './paginas/dietas'
import Gimnasios from './paginas/gimnasios'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Inicio/>} />
        <Route exact path='/login' element={<Log/>} />
        <Route exact path='/inicio_sesion' element={<Inicio_sesion/>} />
        <Route exact path='/registro' element={<Registro/>} />
        <Route exact path='/entrenadores' element={<Conocenos/>} />
        <Route exac path='/dietas' element={<Dietas/>} />
        <Route exact path='/gimnasios' element={<Gimnasios/>} />
      </Routes>
    </Router>

    )
}
