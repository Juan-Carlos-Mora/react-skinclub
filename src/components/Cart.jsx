import { useContext} from "react";
import { CartContext } from "./Context/CartContext";
import trash from "./iconos/icons8-borrar-para-siempre-100.png";
import { Link, Navigate } from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";

const Cart = () => {
    const {cart, cartTotal, removeItem, cartSum} = useContext(CartContext);
      
if(cartTotal() === 0) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Navigate to={"/"}><div className="alert alert-warning text-center" role="alert">
                    No se encuentran productos en el Carro de Compras!
                    </div></Navigate>
                 </div>
            </div> 
        </div>

    )
 

}

    return (
    <div className="container">
        <div className="row my-1">
        <h1 className="text-center m-4">Skin Seleccionadas</h1>    
            <div className="col-md-12">
                <table className="table colores">
                    <tr>
                        <td className="text-end" colSpan={5}><Link onClick={() =>{clear()}} className="btn Botonagregar link" to={"/"}>Vaciar Carrito</Link></td>
                    </tr>

                    {
                        cart.map (item => (
                            <tr key={item.index}>
                        <td className="text-start"><img src={item.imagen} alt={item.nombre} width={120}/></td>
                        <td className="text-start">{item.nombre}</td>
                        <td className="text-center">{item.quantity} x $ {item.precio}</td>
                        <td className="text-center">${item.quantity * item.precio}</td>
                        <td className="text-end">
                        <button  type="button" className="btn Botonagregar" onClick={() => {removeItem(item.index)}} title="Eliminar Producto"><img src={trash} alt={"Eliminar Producto"} width={45} /></button>
                        </td>
                    </tr>   
                                
                                ))
                            }
                    <tr>
                        <td className="text-star" colSpan={2}></td>
                        <td className="text-center">Total a Pagar</td>
                        <td className="text-center"><b>{cartSum()}</b></td>
                        <td className="text-end"><Link type="Button " className="btn Botonagregar link" to={"/Checkout"}>Finalizar Compra</Link></td>
                    </tr>
                </table>
            </div>
            
        </div>
    </div>
    )
}

export default Cart;