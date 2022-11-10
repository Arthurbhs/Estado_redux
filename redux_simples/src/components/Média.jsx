
import React from 'react'

import { connect } from 'react-redux'

import Card from './Card'

const Media = props => {
    const {min, max} = props
    return(
<Card Title="Média dos Números" blue>
    <span>
        <span>Resultado: </span>
        <strong>{(max + min) / 2}</strong>
        
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
export default connect(mapStateToProps)(Media)