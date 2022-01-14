/* eslint-disable import/no-anonymous-default-export */
import react from "react";

export default props =>
    <div>
        <p>{props.children} {props.sobrenome}</p>
    </div>