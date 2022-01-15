/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import ComFilhos from "./ComFilhos";
import ComParametro from "./ComParametro";
import Primeiro from "./Primeiro";
import Card from "./layout/Card";
import './App.css'
import Repeticao from "./layout/Repeticao";
import Condicional from "./Condicional";
import CondicionalComIf from "./CondicionalComIf";
import Pai from "./comunicacao/direta/Pai";
import Super from "./comunicacao/indireta/Super";
import Input from "./form/Input"
import Contador from "./contador/Contador";
import Mega from "./comunicacao/mega/Mega";

export default(props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Card 1" color="#CCCCFF"><Primeiro/></Card>
            <Card titulo="Card 2">
                <ComParametro titulo="Meu título" subtitulo="O subtítulo"/>
            </Card>
            <Card titulo="Card 3" color="#CCCCFF">
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
            <Card titulo="Card 5" color="#CCCCFF"><Repeticao/></Card>
            <Card titulo="Card 6"><Condicional numero={14}/></Card>
            <Card titulo="Card 7" color="#CCCCFF"><CondicionalComIf numero={7}/></Card>
            <Card titulo="Card 8"><Pai sobrenome="Ribeiro"/></Card>
            <Card titulo="Card 9" color="#CCCCFF"><Super/></Card>
            <Card titulo="Card 10"><Input/></Card>
            <Card titulo="Card 11" color="#CCCCFF"><Contador passo={10} valor={100}/></Card>
            <Card titulo="Card 12"><Mega qtdDeNumeros={8}/></Card>
        </div>
    </div>
)