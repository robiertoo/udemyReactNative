import React from 'react'
import { Button, Text } from 'react-native'

export default props => {
    const gerarNumero = (min, max) => {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <>
            <Button 
                title='Executar'
                onPress={() => {
                    const numero = gerarNumero(props.min, props.max)
                    props.funcao(numero, "O valor é: ")
                }}
            />
        </>
    )
}