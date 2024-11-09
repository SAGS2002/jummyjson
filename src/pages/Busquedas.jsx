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
        const URI=API+txtBuscar;
          const response = await fetch(URI);
          const data = await response.json();
          setDatos(data.products);
          console.log(data)
        } catch (error) {
          console.error(error)
        }
    };
    
    useEffect(()=>{
      getDatos(txtBuscar);
    },[txtBuscar]);
  return (
    <div className="container-fluid">
    <h3 className="text-center">Resultado de: {txtBuscar} ({datos.length})</h3>
        <div className="container-fluid row mx-auto grid grid-cols-4 gap-4 m-5  ">
            {datos && datos.map((item)=>(
              <Cardprod key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Busquedas