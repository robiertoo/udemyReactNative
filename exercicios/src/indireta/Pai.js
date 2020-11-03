import React, {useState} from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import Estilo from '../components/estilo'

export default props => {
    const [num, setNum] = useState('0');
    const [texto, setTexto] = useState('');

    const exibirValor = (numero, texto) => {
        setNum(numero)        
        setTexto(texto)
    }
    return (
        <>
            <Text style={Estilo.textoGrande}> { texto }{ num }</Text>
            <Filho 
                min={1} 
                max={60} 
                funcao={exibirValor}
            />
        </>
    )
}