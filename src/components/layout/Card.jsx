/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import './Card.css'

export default props =>
    <div className="Card" style={{
        borderColor: props.color || "black"
    }}>
        <div className="Footer" 
            style={{backgroundColor: props.color || '#800080'}}>
            {props.titulo}
        </div>
        <div className="Conteudo">
            {props.children}
        </div>
    </div>