import {createStore, combineReducers, applyMiddleware} from 'redux'
import { countdownTime, resetTime, isOn, manager, managers, draftLocation} from './reducers'
import stateData from '../data/initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    let state = store.getState();
    //always save as false
    //state.open = false;

    localStorage['redux-store'] = JSON.stringify(state)
    return result
}

const storeFactory = (initialState=stateData) => 

    applyMiddleware(logger, saver)(createStore)(
        combineReducers({countdownTime, resetTime, isOn, manager, managers, draftLocation}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            stateData
    )


   


export default storeFactory