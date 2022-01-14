/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import Sub from "./Sub";

export default (props) => {
    function quandoClicar(valorGerado) {
        console.log('Click!')
        console.log(valorGerado)
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
    