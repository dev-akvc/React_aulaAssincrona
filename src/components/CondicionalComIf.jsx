/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import If from "./If";

export default props => {
    return (
        <div>
            <h2>O número {props.numero} é: </h2>
            <If test={props.numero % 2 == 0}>
                <span>Par</span>
            </If>
            <If test={props.numero % 2 != 0}>
                <span>Ímpar</span>
            </If>
        </div>
    )
}