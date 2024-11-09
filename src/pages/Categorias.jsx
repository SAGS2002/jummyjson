import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Cardprod from '../components/Cardprod'
const API='https://dummyjson.com/products/category/';       

const Categorias = () => {

    const params = useParams()
    const [datos, setDatos] = useState([])
    let URI=API+params.id
    const getDatos = async () =>{
      try {
        const response = await fetch(URI);
        const data = await response.json();

        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[params.id]);
   


  return (
    <>
    
    <div className="container-fluid">
    <h3 className=" text-center">Categoria {params.id} ({datos.length})</h3>
            <div className="container row mx-auto grid grid-cols-3 gap-4 m-5">
                {datos && datos.map((item)=>(
                  <Cardprod key={item.id} item={item}/>
                ))}
            </div>
        </div>

    </>
  )
}

export default Categorias