import face from './iconos/facebook.png';
import what from './iconos/WhatsApp.png';
import inst from './iconos/insta.png';







const Piepagina =() =>{
    return(
      <div className="container-fluid pie mt-4">        
          <div className="col-5 m-2">
            <p><h3> Skin.Club ©</h3></p>
            <p>Puedes conseguir tus skins favoritas a los mejores precios.</p>
            <p>Todos los intercambios se realizan automáticamente utilizando los bots de Steam.</p> 
            <p>Moontain Limited (HE410299) 13 Kypranoros street, EVI Building, 2nd floor, flat/office 205, 1061, Nicosia, Cyprus.</p> 
          </div>
          <div className="col-7 m-2">
            <img src={face} alt={face} width={40} />
            <img src={what} alt={what} width={40}/>
            <img src={inst} alt={inst} width={40} />

          </div> 
          </div>
        
      
      
  
    )
};

export default Piepagina;