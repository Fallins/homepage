import axios from 'axios'
import * as types from '../actions/actionTypes'

export const fetchHotboards = () => ({type: types.FETCH_HOTBOARDS})
export const fetchHotboardsDone = res => {
    return {
        type: types.FETCH_HOTBOARDS_DONE,
        data: res
    }
}

export const fetchPostsList = (url, count = 30) => ({type: types.FETCH_POSTSLIST, data: {url, count}})
export const fetchPostsListDone = res => {
    return {
        type: types.FETCH_POSTSLIST_DONE,
        data: res
    }
}

export const fetchPost = (url) => ({type: types.FETCH_POST, data: {url}})
export const fetchPostDone = res => {
    return {
        type: types.FETCH_POST_DONE,
        data: res
    }
}