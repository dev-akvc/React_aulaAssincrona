/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import ComFilhos from "../ComFilhos";
import ComParametro from "../ComParametro";
import Primeiro from "../Primeiro";
import Card from "./Card";
import './App.css'
import Repeticao from "./Repeticao";

export default(props) => (
    <div className="App">
        <Card titulo="Card 1"><Primeiro/></Card>
        <Card titulo="Card 2">
            <ComParametro titulo="Meu título" subtitulo="O subtítulo"/>
        </Card>
        <Card titulo="Card 3">
            <ComFilhos>
                <ul>
                    <li>Puguinho</li>
                    <li>Pug baby</li>
                    <li>Pug neném</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Card 4">
            Conteúdo do card
        </Card>
        <Card titulo="Card 5"><Repeticao/></Card>
    </div>
)