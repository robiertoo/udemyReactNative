import React from 'react'
import { Platform, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const plataforma = Platform.OS;
    return (
        <>
            <Text style={Estilo.textoGrande}>Olar {plataforma} </Text>
        </>
    )
}