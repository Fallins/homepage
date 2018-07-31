import { connect } from 'react-redux'
import Comp from '../components'
import { fetchHotboards, fetchPostsList, fetchPost, fetchCryptoCoin } from '../actions'
import { favorite } from '../../config'

const mapS2P = state => {
    const { ptt: { hotBoards, postsList, loadingList, post, loadingPost }, cct: { cryptoCoin, LoadingCryptoCoin } } = state.portfolio
    const hbs = hotBoards.length ? hotBoards.map(hb => ({
        text: hb.name,
        value: hb.href
    })) : []

    const options = favorite.map(fav => {
        const opt = {}
        opt.text = fav
        opt.value = `/bbs/${fav}/index.html`
        opt.key = `*${fav}`

        if(fav === "----------") {            
            opt.value = null
        }
        
        return opt
    }).concat(hbs)

    return {
        options, postsList, loadingList, post, loadingPost,
        cryptoCoin, LoadingCryptoCoin
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
        },
        getCryptoCoin: () => {
            dispatch(fetchCryptoCoin())
        },
    }
}

export default connect(mapS2P, mapD2P)(Comp)