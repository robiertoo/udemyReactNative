import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

const Comp =  () => {
    return <Text style={Estilo.textoGrande}>Comp #Oficial</Text>
}
const Comp1 = () => {
    return <Text style={Estilo.textoGrande}>Comp #1</Text>
}
const Comp2 = () => {
    return <Text style={Estilo.textoGrande}>Comp #2</Text>
}

export { Comp1, Comp2 }
export default Comp
