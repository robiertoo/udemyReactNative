import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './estilo'

export default ({inicial = 0, passo = 1}) => {
    const [valor, setValor] = useState(inicial)
    const adicionar = () => setValor(valor + passo)
    const subtrair = () => setValor(valor - passo)
    

    return (
        <>
            <Text 
                style={Estilo.textoGrande} 
            >
               Valor: {valor}
            </Text>
            <Button 
                title='+'
                onPress={adicionar}
            />
            <Button 
                title='-'
                onPress={subtrair}
            />
        </>
    )
}