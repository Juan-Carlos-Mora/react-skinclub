import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import trash from "../iconos/icons8-borrar-para-siempre-100.png";

const Cart = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const {cart, cartTotal,clear, removeItem, cartSum} = useContext(CartContext);


    const generarOrden = ()=> {
        const buyer = {name:nombre, email:email, telefono:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}}`;
        const order = {buyer, items:cart, date:date,total:cartTotal()}
    }
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
            <div className="col-md-4">
                <form>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" onInput={(e) =>{
                            setNombre(e.target.value);}}/>
                    </div>
                    <div class="mb-3">
                        <label for="Email" class="form-label">Correo Electronico</label>
                        <input type="email" class="form-control" id="Correo electronico"onInput={(e) =>{
                            setEmail(e.target.value);}}/>
                    </div>
                    <div class="mb-3 form-check">
                        <label class="Telefono " className="form-label">Numero de Telefono</label>
                        <input type="number" class="form-control" id="numero telefono"onInput={(e) =>{
                            setTelefono(e.target.value);}}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Generar Orden</button>
                </form>
            <div className="col-md-8">
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
    </div>
    )
}

export default Cart;