import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { portfolio, portfolioEpics } from './Portfolio/combined'

export const rootEpic = combineEpics(
    portfolioEpics
)

export const rootReducer =  combineReducers({
    portfolio,
})