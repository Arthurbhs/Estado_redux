import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { alterarNumeroMinimo } from '../store/actions/Numeros'

const Interval = props => {

    const{min, max} = props
    props.alterarMinimo(1000)
    return(
<Card Title="Intervalo de Números" red>
    <span>
        <strong>Minimo</strong>
        <input type="number" value={min} readOnly/>
    </span>
    <span>
        <strong>Máximo</strong>
        <input type="number" value={max} readOnly />
    </span>
</Card>


    )}
    function mapStateToProps(state){
        return{
            min: state.numeros.min,
            max: state.numeros.max,
           
        }
        
        }

        function mapActionCreatorsToProps(dispatch){
            return{
                alterarMinimo(novoNumero){
                    //action creator:
                    const action = alterarNumeroMinimo(novoNumero)
                    dispatch(action)
                }
            }
        }
        export default connect(mapStateToProps, mapActionCreatorsToProps)(Interval)

