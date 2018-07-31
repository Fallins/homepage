import { combineReducers } from 'redux'
import * as types from '../../actions/actionTypes'

const cryptoCoin = (state = [], action) => {
    switch(action.type) {
        case types.FETCH_CRYPTOCOIN_DONE: 
            return action.data
        default:
            return state
    }
}

const LoadingCryptoCoin = (state = false, action) => {
    switch(action.type) {
        case types.FETCH_CRYPTOCOIN: 
            return true
        case types.FETCH_CRYPTOCOIN_DONE: 
            return false
        default:
            return state
    }
}

export const cct = combineReducers({
    cryptoCoin, LoadingCryptoCoin
})