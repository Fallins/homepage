import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { ptt } from './reducers/ptt'
import { getHotboardsEpic, getPostsListEpic, getPostEpic } from './epics/ptt'

export const portfolio =  combineReducers({
    ptt
})

export const portfolioEpics = combineEpics(
    getHotboardsEpic, getPostsListEpic, getPostEpic
)