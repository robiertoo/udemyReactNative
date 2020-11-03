import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
// import Primeiro from './src/components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'
// import MinMax from './src/components/MinMax'
// import Aleatorio from './src/components/Aleatorio'
// import Titulo from './src/components/Titulo'
// import Botao from './src/components/Botao'
// import Contador from './src/components/Contador'
// import Calculadora from './src/components/CalculadoraHorasExtras'
// import Pai from './src/indireta/Pai';
import ContadorV2 from './src/components/contador/ContadorV2'

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <ContadorV2 />
      {/* 
      <Pai />
      <Calculadora horaNormal={7.44} />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Primeiro />
        <Comp1 />
        <Comp2 />
        <CompPadrao/> 
        <MinMax min={3} max={20}  />
        <MinMax min={1} max={94}  /> 
        <Aleatorio min={1} max={50}/> 
        <Titulo principal={'Cadastro de Produto'} secundario={'Tela de Cadastro de Produto'}/> 
        <Botao />
      */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default App