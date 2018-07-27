import React, {Component} from 'react'
import { Segment, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component{
    state = {activeItem: 'Home'}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Segment textAlign='right' style={{padding: "0.25em 1em", background: "transparent"}}>
                <Menu secondary color="teal">
                <Link to="/">
                    <Menu.Item as="span" onClick={this.handleItemClick} >
                        <Icon link name='home' size="small" style={{fontSize: "1.09em"}}/>
                    </Menu.Item>
                </Link>  
                
                <Menu.Menu position="right">                    
                    <Link to="/about">
                        <Menu.Item
                            as="span" 
                            name='About'
                            color="grey"
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        />
                    </Link>  
                    <Link to="/portfolio">
                        <Menu.Item
                            as="span" 
                            name='Portfolio'
                            color="grey"
                            active={activeItem === 'Portfolio'}
                            onClick={this.handleItemClick}
                        />
                    </Link>  
                    </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}

export default Nav