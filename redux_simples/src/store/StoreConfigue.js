import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numeros: function(state, action){

    switch(action.type){
        case 'NUM_MIN_ALTERADO':
        return{
            ...state,
            min: action.payload
        }
        default:
            return{
                min: 7,
                max: 31
            }
    }

    return{
      min: 3,
      max: 10
    }
},

nomes: function(state, action)
{
    return[
        'ana',
        'bia',
        'carlos'
    ]
}

})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig