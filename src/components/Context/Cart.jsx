import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import trash from "../iconos/icons8-borrar-para-siempre-100.png";

const Cart = () => {
    const {cart, cartTotal,clear, removeItem, cartSum} = useContext(CartContext);

if(cartTotal() === 0) {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md=12">
                    <div className="alert alert-warning text-center" role="alert">
                    No se encuentran productos en el Carro de Compras!
                    </div>
                </div>
            </div>
        </div>

    )


}

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center">Skin Seleccionadas</h1>
                <table className="table colores">
                    <tr>
                        <td className="text-end" colSpan={5}><Link type="Button" className="btn Botonagregar"  onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                    </tr>

                    {cart.map (item => (
                       <tr key={item.index}>
                        <td className="text-start"><img src={item.imagen} alt={item.nombre} width={150}/></td>
                        <td className="text-start">{item.nombre}</td>
                        <td className="text-center">{item.quantity} x $ {item.precio}</td>
                        <td className="text-center">${item.quantity * item.precio}</td>
                        <td className="text-end">
                        <Link className="btn Botonagregar" onClick={() => {removeItem(item.index)}} title="Eliminar Producto"><img src={trash} alt={"Eliminar Producto"} width={45} /></Link>
                        </td>
                       </tr>   
                                  
                    ))}
                    <tr>
                        <td className="text-star" colSpan={2}></td>
                        <td className="text-center">Total a Pagar</td>
                        <td className="text-center"><b>{cartSum()}</b></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    )
}

export default Cart;