import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/search?q=';
import Cardprod from "../components/Cardprod";
import { useLocation } from 'react-router-dom';

const Busquedas = () => {
    const location = useLocation();
    const txtBuscar = location.state;
    
    const [datos, setDatos] = useState([])
    const getDatos = async (valueSearch) =>{
        try {
        const URI=API+valueSearch;
          const response = await fetch(URI);
          const data = await response.json();
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
    };
    useEffect(()=>{
      getDatos(txtBuscar);
    },[txtBuscar]);
  return (
    <div className="container">
    <h3 className="text-center py-4 fw-bold text-sombra">{txtBuscar} ({datos.length})</h3>
        <div className="row ">
            {datos && datos.map((item)=>(
              <Cardprod key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Busquedas