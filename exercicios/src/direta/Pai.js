import React from 'react'
import Filho from './Filho'
import Estilo from '../components/estilo'

export default props => {
    
    return (
        <>
            <Filho style={Estilo.textoGrande} a={10} b={50} />
            <Filho style={Estilo.textoGrande} a={10} b={50} />
            <Filho a={10 * 5} b={50 * 65} />
        </>
    )
}