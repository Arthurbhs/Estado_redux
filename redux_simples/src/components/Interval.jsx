import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/Numeros'

const Interval = props => {

    const{min, max} = props

    return(
<Card Title="Intervalo de Números" red>
    <span>
        <strong>Minimo</strong>
        <input type="number" value={min}
        onChange={ e => props.alterarMinimo(e.target.value)}/>
    </span>
    <span>
        <strong>Máximo</strong>
        <input type="number" value={max} 
         onChange={ e => props.alterarNumeroMaximo(e.target.value)}/>
    </span>
</Card>


    )}
    function mapStateToProps(state){
        return{
            min: state.numeros.min,
            max: state.numeros.max,
           
        }
        
        }

        function mapADispatchToProps(dispatch){
            return{
                alterarMinimo(novoNumero){
                    //action creator:
                    const action = alterarNumeroMinimo(novoNumero)
                    dispatch(action)
                },

                alterarNumeroMaximo(novoNumero){

                    const action = alterarNumeroMaximo(novoNumero)
                    dispatch(action)
                }
            }
        }
        export default connect(mapStateToProps, mapADispatchToProps)(Interval)

