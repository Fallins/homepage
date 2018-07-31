import { map, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable'
import * as types from '../../actions/actionTypes'
import { fetchCryptoCoinDone } from '../actions'

const BASE_URL = "https://min-api.cryptocompare.com/data/pricemultifull"
const CRYPTO_COIN = ["BTC", "ETH", "XRP", "BCH", "EOS", "ADA", "LTC", "XLM", "TRX", "NEO"]
const CURRENCY = ["USD", "TWD"]
const QUERY = `?fsyms=${CRYPTO_COIN.join(',')}&tsyms=${CURRENCY.join(',')}`

export const getCryptoCoinEpic = action$ => action$.pipe(
    ofType(types.FETCH_CRYPTOCOIN),
    mergeMap(action => {
        return ajax.get(`${BASE_URL}${QUERY}`).pipe(
            map(res => fetchCryptoCoinDone( genData(res.response.DISPLAY, CRYPTO_COIN)  ))
        )
    })
)

const genData = (fullData, cryptoCoin) => {
    // console.log({fullData})
    const data = []
    
    cryptoCoin.map( c => {
      const d = fullData[c]
      data.push({
        name: c,
        price: {
            TWD: d.TWD.PRICE,
            USD: d.USD.PRICE
        },
        changeInLast24H: {
            amount: d.USD.CHANGE24HOUR,
            percent: d.USD.CHANGEPCT24HOUR
        }
      })
    })
    return data
}
