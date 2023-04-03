import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
   const {orderId} = useParams();
     
   
    return(
        <div className="container">
            <div className=" row my-3">
                <div className="col-md-12">
                        {orderId ? <div className="alert alert-warning text-center" role={"alert"}><h3>Gracias por Su Compra!</h3><p>Se genero una orden de compra con el ID: <b>{orderId}</b></p></div> : ""}
                        <Link to={"/"} className="btn Botonagregar text-center"> Volver al menu Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;