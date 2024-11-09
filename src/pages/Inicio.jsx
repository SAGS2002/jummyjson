
import Cardinicio from "../components/Cardinicio"
import { useEffect, useState } from "react";
import banner from '/public/img/banner.png'

const API='https://dummyjson.com/products';
const Inicio = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
    getDatos();
    },[]);
  return (
    <>
    <img src={banner} alt="" />
  
    <div className='container mx-auto grid grid-cols-3 gap-4 m-5'>
      {datos && datos.map((item) => (

        <Cardinicio
          key={item.id}
          item={item}
        />
        
      ))}
    </div>
    </>
  )
}

export default Inicio