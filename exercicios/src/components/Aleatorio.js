import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({min, max}) => {
    const delta = max - min + 1
    const valorAleatorio = parseInt((Math.random() * delta) + min)
    return (
        <Text style={Estilo.textoGrande}>O valor é {valorAleatorio}</Text>
    )
}
