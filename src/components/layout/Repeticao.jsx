/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import products from "../../data/products";

export default props => {

    function getProdutosListItem(){
        return products.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome}: R$ {prod.preco}
            </li>
        })
    }

    return(
        <>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </>
    )
}