import { useCartContext } from "../../context/Cartcontext/userCartContext";
import { Count } from "../Count/Count";
import { Item } from "../Item/Item";
//import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const {addItem} = useCartContext();

  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity });
  };

  return (
    /*
    <div className='item-detail'>
      <Item {...detail}>
        <button className='btn btn-add' 
          onClick={() => { 
            addItem(detail);
        }}
        >
          🛒 Enviar al carrito
        </button>
      </Item>
    </div>
    */
   <Item {...detail}>
      <Count btnText={"🛒 Enviar al carrito"} onConfirm={handleAdd} />
   </Item>
  );
};
