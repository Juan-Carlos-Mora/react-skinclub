import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import { addDoc, collection,  getFirestore} from "firebase/firestore"; 
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrdeId] = useState("");
    const {cart, clear, cartSum} = useContext(CartContext);
    
    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:cart, date:date,total:cartSum()};
        

        if (nombre.length === 0){return false;}
        if (email.length === 0) {return false;}
        if ( telefono.length === 0) {return false;}
        const db = getFirestore();
        const ordenesColletion = collection(db, "ordenes");
        addDoc(ordenesColletion, order).then(data => {
            setOrdeId(data.id);
            clear();
        });
        

        
    }
    
    
    return (
    <div className="container">
        <div className="row my-1">
        <h1 className="text-center m-4">Skin Seleccionadas</h1>    
            <div className="col-md-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label tamanoInput" >Nombre</label>
                        <input  type="text" className="form-control tamanoInput" id="nombre" onInput={(e) =>{
                            setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label tamanoInput">Correo Electronico</label>
                        <input type="email" className="form-control tamanoInput" id="Correo electronico"onInput={(e) =>{
                            setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Telefono" className="form-label tamanoInput">Numero de Telef</label>
                        <input type="number" className="form-control tamanoInput" id="numero telefono"onInput={(e) =>{
                            setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn Botonagregar" onClick={() => {generarOrden()}}>Generar Orden</button>
                </form>
            </div>        
            <div className="col-md-9">
                <table className="table colores">
                    
                    {
                        cart.map (item => (
                            <tr key={item.index}>
                                <td className="text-start"><img src={item.imagen} alt={item.nombre} width={120}/></td>
                                <td className="text-start">{item.nombre}</td>
                                <td className="text-center">{item.quantity} x $ {item.precio}</td>
                                <td className="text-center">${item.quantity * item.precio}</td>
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
            {orderId ? <Navigate to={"/ThankYou/" + orderId}/> : ""}    
        </div>
    </div>
    )
}

export default Checkout;