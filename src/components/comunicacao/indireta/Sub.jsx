/* eslint-disable import/no-anonymous-default-export */
import react from "react";

export default props => {
    return (
        <div>
            <button onClick={() => {
                props.onClicar(Math.random())
            }}>Alterar</button>
        </div>
    )
}