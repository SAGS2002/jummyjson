import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const API = 'https://dummyjson.com/products/category-list';



const FiltroCategorias = () => {
  const [datos, setDatos] = useState([]);
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
      {datos && datos.map((item) => (
        <li key={item} className="hover:bg-slate-500 rounded-md hover:text-white hover:font-bold text-slate-700">
          <Link to={`/categorias/${item}`}>
          {item}
          </Link>
          </li> 
      ))}
    </>
  );
};

export default FiltroCategorias;
