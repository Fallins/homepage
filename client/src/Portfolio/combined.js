import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { ptt } from './reducers/ptt'
import { cct } from './reducers/cct'
import { getHotboardsEpic, getPostsListEpic, getPostEpic } from './epics/ptt'
import { getCryptoCoinEpic } from './epics/cct'

export const portfolio =  combineReducers({
    ptt, cct
})

export const portfolioEpics = combineEpics(
    getHotboardsEpic, getPostsListEpic, getPostEpic, 
    getCryptoCoinEpic, 
)