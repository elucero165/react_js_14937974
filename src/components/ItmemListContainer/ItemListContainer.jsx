import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    setProducts([]); 

    fetch("/data/products.json")
      //setProducts([]);
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        console.log("📦 Datos cargados:", data);
        if(category){
          console.log("🔍 Filtrando por categoría:", category);
          const filteredProducts = data.filter((product) => product.category.toLowerCase() === category.toLowerCase());
          setProducts(filteredProducts);
        }else{
          setProducts(data);
        }  
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const tituloFinal = category
    ? `${titulo}: ${category.charAt(0).toUpperCase() + category.slice(1)}`
    : titulo;

  return (
    <section>
       <h1>{tituloFinal}</h1>
      <ItemList list={products} />
    </section>
  );
};