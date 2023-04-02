import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import trash from "../iconos/icons8-borrar-para-siempre-100.png";
import { addDoc, collection,  getFirestore} from "firebase/firestore"; 
import { Link } from "react-router-dom";

const Cart = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrdeId] = useState("");
    const {cart, cartTotal, removeItem, cartSum} = useContext(CartContext);
    
    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:cart, date:date,total:cartSum()};
        
        const db = getFirestore();
        const ordersColletion = collection(db, "orders");
        addDoc(ordersColletion, order).then(data => {setOrdeId(data.id);});
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
                    <button type="submit" class="btn Botonagregar link"><Link className="link" to={"/"}>Volver al Menu</Link></button>
            </div> 
        </div>

    )


}

    return (
    <div className="container">
        <div className="row my-1">
        <h1 className="text-center m-4">Skin Seleccionadas</h1>    
            <div className="col-md-3">
                <form>
                    <div class="mb-3">
                        <label htmlFor="nombre" class="form-label tamanoInput" >Nombre</label>
                        <input  type="text" class="form-control tamanoInput" id="nombre" onInput={(e) =>{
                            setNombre(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="Email" class="form-label tamanoInput">Correo Electronico</label>
                        <input type="email" class="form-control tamanoInput" id="Correo electronico"onInput={(e) =>{
                            setEmail(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="Telefono" className="form-label tamanoInput">Numero de Telef</label>
                        <input type="number" class="form-control tamanoInput" id="numero telefono"onInput={(e) =>{
                            setTelefono(e.target.value)}}/>
                    </div>
                    <button type="submit" class="btn Botonagregar" onClick={() => {generarOrden()}}>Generar Orden</button>
                </form>
            </div>        
            <div className="col-md-9">
                <table className="table colores">
                    <tr>
                        <td className="text-end" colSpan={5}><button type="Button" className="btn Botonagregar">Vaciar Carrito</button></td>
                    </tr>

                    {
                        cart.map (item => (
                            <tr key={item.index}>
                        <td className="text-start"><img src={item.imagen} alt={item.nombre} width={120}/></td>
                        <td className="text-start">{item.nombre}</td>
                        <td className="text-center">{item.quantity} x $ {item.precio}</td>
                        <td className="text-center">${item.quantity * item.precio}</td>
                        <td className="text-end">
                        <button className="btn Botonagregar" onClick={() => {removeItem(item.index)}} title="Eliminar Producto"><img src={trash} alt={"Eliminar Producto"} width={45} /></button>
                        </td>
                    </tr>   
                                
                                ))
                            }
                    <tr>
                        <td className="text-star" colSpan={2}></td>
                        <td className="text-center">Total a Pagar</td>
                        <td className="text-center"><b>{cartSum()}</b></td>
                    </tr>
                </table>
            </div>
            <div className="col-md-4">
                {orderId ? <div className="alert alert-warning" role={"alert"}><h3>Gracias por Su Compra!</h3><p>Se genero una orden de compra con el ID: <b>{orderId}</b></p></div> : ""}
            </div>
        </div>
    </div>
    )
}

export default Cart;