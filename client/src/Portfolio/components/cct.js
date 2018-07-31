import React, { Component } from 'react'
import { Table, Loader} from 'semantic-ui-react'
import style from './index.css'
import Icons from '../../utils/Icon'

/* Crypto Coin Ticker
 * it will not refresh automatically for now
 * worklist: 
 *  1. use socket.io to refresh automatically
 */
class Cct extends Component {
    componentDidMount() {
        const { getCryptoCoin } = this.props
        getCryptoCoin()
    }

    componentDidUpdate() {
        // const { cryptoCoin } = this.props
        // console.log({cryptoCoin})
    }

    render() {
        const { cryptoCoin, LoadingCryptoCoin } = this.props

        return (
            <Table basic selectable style={{backgroundColor: "rgba(256, 256, 256, 0.5)"}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>市值排行</Table.HeaderCell>
                        <Table.HeaderCell>美金</Table.HeaderCell>
                        <Table.HeaderCell>台幣</Table.HeaderCell>
                        <Table.HeaderCell>24H漲跌(美金)</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        LoadingCryptoCoin ? <Loader active /> : 
                            (
                                cryptoCoin.map(cc => {
                                    return (
                                        <Table.Row>
                                            <Table.Cell>
                                                <Icons name={cc.name} />
                                                <span className={style.cryptoCoin__name}>{cc.name}</span>
                                            </Table.Cell>
                                            <Table.Cell>{cc.price.USD}</Table.Cell>
                                            <Table.Cell>{cc.price.TWD}</Table.Cell>
                                            <Table.Cell>{cc.changeInLast24H.amount}</Table.Cell>
                                        </Table.Row>
                                    )
                                })
                            )
                    }
                    
                </Table.Body>
            </Table>
        )
        
    }
}

export default Cct