import { combineReducers } from 'redux'
import * as types from '../../actions/actionTypes'

const hotBoards = (state = [], action) => {
    switch(action.type) {
      case types.FETCH_HOTBOARDS_DONE: 
        return action.data
      default:
        return state
    }
}

const postsList = (state = {posts: [], popular: []}, action) => {
  switch(action.type) {
    case types.FETCH_POSTSLIST_DONE: 
      return action.data
    default:
      return state
  }
}


const post = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_POST_DONE: 
      return action.data
    default:
      return state
  }
}


const loadingList = (state = false, action) => {
  switch(action.type) {  
    case types.FETCH_POSTSLIST: 
      return true
    case types.FETCH_POSTSLIST_DONE: 
      return false
    default: 
      return state
  }
}

export const ptt = combineReducers({
  hotBoards, postsList, loadingList, post
})