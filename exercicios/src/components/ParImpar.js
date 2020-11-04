import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    return (
        <View>
            <Text style={Estilo.textoGrande}>O resultado é:</Text>
            {
                num % 2 == 0 
                ? <Text style={Estilo.textoGrande}>Par</Text>
                : <Text style={Estilo.textoGrande}>Ímpar</Text>
            }
        </View>
    )
}