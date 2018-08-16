import { map, mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable'
import * as types from '../../actions/actionTypes'
import { fetchHotboardsDone, fetchPostsListDone, fetchPostDone} from '../actions'

export const getHotboardsEpic = action$ => action$.pipe(
    ofType(types.FETCH_HOTBOARDS),
    mergeMap(action => {
        console.log(action)
        return ajax.get("/api/hotboards").pipe(
            map(res => fetchHotboardsDone(res.response))
        )
    })
)

export const getPostsListEpic = action$ => action$.pipe(
    ofType(types.FETCH_POSTSLIST),
    mergeMap(({data}) => {
        // console.log("======================")
        // console.log(data)
        // console.log("======================")
        return ajax.get(`/api/posts/${data.count}?url=${data.url}`).pipe(
            map(res => fetchPostsListDone(res.response)),
            catchError(error => of({
                type: types.FETCH_POSTSLIST_ERROR,
                data: "",
                error: true
            }))
        )
    })
)

export const getPostEpic = action$ => action$.pipe(
    ofType(types.FETCH_POST),
    mergeMap(({data}) => {
        // console.log("======================")
        // console.log(data)
        // console.log("======================")
        return ajax.get(`/api/post?url=${data.url}`).pipe(
            map(res => fetchPostDone(res.response)),
            catchError(error => of({
                type: types.FETCH_POST_ERROR,
                data: "",
                error: true
            }))
        )
    })
)