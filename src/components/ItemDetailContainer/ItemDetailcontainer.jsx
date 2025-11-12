import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductbyId } from "../../services/products";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  //Desestructuramos el objeto del useParams
  //la clave coincide con el nombre que definimos en Route-> :id
  const { id } = useParams();

  useEffect(() => {
    //fetch("/data/products.json")
    /*
    fetch("https://6900bbabff8d792314bb331a.mockapi.io/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontro el producto");
        }

        return res.json();
      })
      .then((data) => {
        const found = data.find((prod) => prod.id === id); //Usamos el param para comparar el id del producto en el json
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })*/
      getProductbyId(id)
        .then((data) => setDetail(data))
        .catch((err) => {
          console.log(err);
      });
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};
