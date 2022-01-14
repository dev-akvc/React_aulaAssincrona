import reactDom from 'react-dom'
import ComParametro from './components/ComParametro'
import Primeiro from './components/Primeiro'
import './index.css'


reactDom.render(
    <div>
        <Primeiro/>
        <ComParametro titulo="Meu título" subtitulo="O subtítulo"/>
    </div>,
    document.getElementById('root')
)

