import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({principal, secundario}) => {
    return (
        <>
            <Text style={Estilo.textoGrande}>
                {principal}
            </Text>
            <Text>
                {secundario}
            </Text>
        </>
    )
}