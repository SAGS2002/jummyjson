import { ShoppingCart, Search, LayoutGrid, ChevronDown } from 'lucide-react'
import FiltroCategorias from './FiltroCategorias'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'  
import { useState } from 'react'

const Header = () => {


  const [txtbuscar, setTxtbuscar] = useState('');

const manejoTxt = (event) => {
    setTxtbuscar(event.target.value);
};

const navigate = useNavigate();
const manejoEnvio = (event) => {
    event.preventDefault();
    navigate('/busquedas', {
      state: txtbuscar,
    });

  }

  return (
    <>
        <div className="navbar bg-slate-700 text-white justify-center p-4">
           
          <div id="logo">
            <ShoppingCart className='h-8 w-8 m-2'/>
            <Link to={"/"}><span className='font-bold'>DUMMY</span>JSON</Link>
          </div>
           
           <div id="SearchInput" className='rounded-md bg-white w-3/5 ml-10 text-black'>
            <div className='bg-slate-700 text-white w-full flex'>
            <input value={txtbuscar} onChange={manejoTxt} type="search" placeholder='Realiza tu busqueda...' className='p-2 w-full rounded-md text-black'/>
            <button type='submit' onSubmit={manejoEnvio} className='h-6 w-6 m-2'>
            <Search />
            </button>
            </div>
           </div>
        </div>
        <div className='bg-slate-300 text-slate-700 flex' id="SecondNav">






                <div className="drawer z-50">
                  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Categorias</label>
                  </div>
                  <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    
                    <ul className="menu bg-black min-h-full w-80 p-4">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="text-5xl text-white drawer-overlay">Categorias</label>
                    <br />  
                     <FiltroCategorias/>
                    </ul>
                  </div>
                </div>




        <div className="flex p-2 items-center text-slate-700">|</div>

        </div>

    </>
  )
}

export default Header