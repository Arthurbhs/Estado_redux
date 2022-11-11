import { createStore, combineReducers } from "redux";
import NumerosReducer from "./reducers/NumerosReducer";

const reducers = combineReducers({
    numeros: NumerosReducer,
    
})





function storeConfig() {
    return createStore(reducers)
}

export default storeConfig