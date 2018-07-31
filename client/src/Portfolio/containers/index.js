import { connect } from 'react-redux'
import Comp from '../components'
import { fetchHotboards, fetchPostsList, fetchPost } from '../actions'

const mapS2P = state => {
    const { ptt: { hotBoards, postsList, loadingList, post, loadingPost } } = state.portfolio
    const options = hotBoards.length ? hotBoards.map(hb => ({
        text: hb.name,
        value: hb.href
    })) : []

    return {
        options, postsList, loadingList, post, loadingPost
    }
}

const mapD2P = dispatch => {
    return {
        getHotBoards: () => {
            dispatch(fetchHotboards())
        },
        getPostsList: (url, count) => {
            dispatch(fetchPostsList(url, count))
        },
        getPost: url => {
            dispatch(fetchPost(url))
        }
    }
}

export default connect(mapS2P, mapD2P)(Comp)