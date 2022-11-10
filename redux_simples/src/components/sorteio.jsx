
import React from 'react'

import Card from './Card'

import { connect } from 'react-redux'

const Sorteio = props => {
    const[min, max] = props
    const random = parseInt(Math.random() * (max - min))
    return(
<Card Title="Sorteio dos Números" purple>
    <span>
        <span>Resultado: </span>
        <strong>{random}</strong>
        
    </span>
 
</Card>
    )
    }

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max,
       
    }
    
    }

    export default connect(mapStateToProps)(Sorteio)