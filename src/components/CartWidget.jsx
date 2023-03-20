import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

  const CartWidget = () => {
const {cartTotal} = useContext(CartContext)


    return cartTotal() > 0 ?
  
      <Link to={"/cart"} className="btn Botonagregar position-relative align-items-center justify-content-center">
        <img className="m-2 logo3" src="/image/logos/icons8-fusil-de-asalto-50.png" alt="Logo" /><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
      </Link>: "";
   
      
      

  };

export default CartWidget;