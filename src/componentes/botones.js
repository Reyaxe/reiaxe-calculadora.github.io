import React from "react";
 import '../hojas-de-estilos/boton.css';
function Botones(props){
    return(
     <div className= 'boton-contenedor' 
     onClick={ () => props.manejarClic(props.children)}> 
        
        {props.children}
        
     </div>
    );
}
export default Botones;