import React, { useState } from 'react'
import { Text, Button, TextInput } from 'react-native'
import Estilo from './estilo'

export default ({horaNormal}) => {
    const horaExtra = horaNormal + (horaNormal * 0.55)
    const horaExtraDomingo = horaNormal + (horaNormal * 1)
    const [valor, setValor] = useState(horaExtraDomingo)
    const [horas, setHoras] = useState(1)
    const calcular = () => {
        setValor(horas * horaExtraDomingo)
    }

    return (
        <>
            <Text style={Estilo.textoGrande}>Calculadora de Horas Extras</Text>   
            <Text>Horas Trabalhadas:</Text>   
            <TextInput
                style={Estilo.caixaTexto}
                value={horas}
                onChangeText={(horas) => {
                    setHoras(horas)
                }}
            />
            <Button
                title='Calcular'
                onPress={calcular}
            />
            <Text style={Estilo.textoGrande}>R${valor}</Text>
        </>
    )
}