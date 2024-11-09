import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Categorias from './pages/Categorias.jsx'
import Busquedas from './pages/Busquedas.jsx'


function App() {


  return (
    <>
        <BrowserRouter>
            <Header/>
            <main>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path='/categorias/:id' element={<Categorias/>}/>
                <Route path='/busquedas' element={<Busquedas/>}></Route>
            </Routes>
            </main>
        </BrowserRouter>
    </>
  )
}

export default App
