import React, { Component } from 'react'
import { Container, Menu} from 'semantic-ui-react'
import Ptt from './ptt'
import Cct from './cct'
import Frc from './frc'

class Portfolio extends Component {
    state = {
        options: [],
        value: "",
        textOnly: true ,
        activeItem: 'PTT',
        menuItems: ['PTT', 'CCT', 'FRC']
    }

    handleChange = (e, { value, count = 200 }) => {    
        if(!value) return

        const { getPostsList } = this.props
        getPostsList(value, count)
        this.setState({ value })
    }

    getPost = (url) => {
        const { getPost } = this.props
        console.log("getPost", url)
        getPost(url)
    }

    textOnlyHandler = (textOnly) => {
        this.setState({textOnly})
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    showContent = () => {
        const { value, textOnly, activeItem } = this.state
        const { options, postsList, loadingList, post, loadingPost } = this.props
        const pttParams = {
            value, textOnly, options, postsList, loadingList, post, loadingPost, 
            textOnlyHandler: this.textOnlyHandler, handleChange: this.handleChange,
            getPost: this.getPost
        }

        switch(activeItem) {
            case 'PTT':
                return <Ptt {...pttParams} />
            case 'CCT':
                return <Cct {...this.props}/>
            case 'FRC':
                return <Frc />
            default: 
                return <p>empty....</p>
        }
    }

    componentDidMount() {
        const { getHotBoards } = this.props
        getHotBoards()
    }

    render() {   
        const { activeItem, menuItems } = this.state
        
        return (
            <Container>
                <Menu pointing secondary>
                    {
                        menuItems.map(item => <Menu.Item key={item} name={item} active={activeItem === item} onClick={this.handleItemClick} />)
                    }
                </Menu>   

                {this.showContent()}
            </Container>
        )
    }
}

export default Portfolio