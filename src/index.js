import reactDom from 'react-dom'
import ComFilhos from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import './index.css'


reactDom.render(
    <div>
        <Primeiro/>
        <ComParametro titulo="Meu título" subtitulo="O subtítulo"/>
        <ComFilhos>
            <ul>
                <li>Puguinho</li>
                <li>Pug baby</li>
                <li>Pug neném</li>
            </ul>
        </ComFilhos>
        <Card titulo="Card">
            Conteúdo do card
        </Card>
    </div>,
    document.getElementById('root')
)

