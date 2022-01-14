/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import Filho from "./Filho";

export default props =>
    <div>
        <Filho {...props}>Anna</Filho>
        <Filho sobrenome={props.sobrenome}>Karol</Filho>
        <Filho sobrenome="Vasconcelos">Karolyne</Filho>
    </div>