/* eslint-disable import/no-anonymous-default-export */
import react from "react";

export default props =>

<>
    <div>
        <label for="passoInput">Passo: </label>
        <input 
        id="passoInput" 
        type="number" 
        value={props.passo}
        onChange={(e) => props.onPassoChange(+e.target.value)}
        />
    </div>

</>

