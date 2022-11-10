import './Interval.css'
import React from 'react'

import Card from './Card'

export default props => {
    return(
<Card Title="Intervalo de Números" red>
    <span>
        <strong>Minimo</strong>
        <input type="number" value={0} readOnly/>
    </span>
    <span>
        <strong>Máximo</strong>
        <input type="number" value={10} readOnly />
    </span>
</Card>


    )
}