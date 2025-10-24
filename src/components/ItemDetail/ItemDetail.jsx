import { useCartContext } from "../../context/Cartcontext/userCartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const {addItem} = useCartContext();
  return (
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
  );
};
