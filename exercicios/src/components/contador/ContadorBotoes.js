import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <>
            <View style={styles.Botoes}>
                <Button
                    style={styles.Botao}
                    title='+'
                    onPress={props.inc}
                    />
                <Button
                    style={styles.Botao}
                    title='-'
                    onPress={props.dec}
                    />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    Botoes: {
        flexDirection: 'row',
        marginTop: 10
    },
});