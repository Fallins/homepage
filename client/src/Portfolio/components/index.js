import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Segment, Dropdown, Loader, } from 'semantic-ui-react'
import style from './index.css'

class Portfolio extends Component {
    state = {
        options: [],
        value: ""
    }

    handleChange = (e, { value }) => {
        const { getPostsList } = this.props
        getPostsList(value)
        this.setState({ value })
    }

    getPost = (url) => {
        const { getPost } = this.props
        console.log("getPost", url)
        getPost(url)
    }

    componentDidMount() {
        const { getHotBoards } = this.props
        getHotBoards()
    }

    componentDidUpdate() {
        console.log(this.state.value)
    }

    render() {    
        // const { value, options } = this.state
        const { value } = this.state
        const { options, postsList, loadingList, post } = this.props
        return (
            <Container>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Dropdown
                                onChange={this.handleChange}
                                options={options}
                                placeholder='Choose an option'
                                selection
                                value={value}
                            />
                        </Grid.Column>               
                    </Grid.Row>
                    {
                        value ? (
                            <Grid.Row centered>
                                <Grid.Column computer={6} mobile={16}>
                                    <div className={style.sideListContainer}>
                                        <div className={style.sideList}>                                            
                                            {
                                                !loadingList ? (
                                                    postsList.posts.map(item => (
                                                        <div className={style.sideList__item} key={item.title} onClick={() => this.getPost(item.href)}>{item.title}</div>
                                                    ))
                                                ) : (
                                                    <div className={style.sideList__loader}>
                                                        <Loader active/>                                                        
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column computer={10} mobile={16}>
                                    <div className={style.postContentContainer}>
                                        <div className={style.postContent}>                                            
                                            {
                                                // !loadingList ? (
                                                //     postsList.posts.map(item => (
                                                //         <div className={style.sideList__item} key={item.title} onClick={() => this.getPost(item.href)}>{item.title}</div>
                                                //     ))
                                                // ) : (
                                                //     <div className={style.sideList__loader}>
                                                //         <Loader active/>                                                        
                                                //     </div>
                                                // )
                                            }
                                            <div className={style.postContent__content} dangerouslySetInnerHTML={{__html: post.content}}>
                                            </div>
                                        </div>
                                    </div>
                                </Grid.Column>               
                            </Grid.Row>    
                        ) : null
                    }                          
                </Grid>
            </Container>
        )
    }
}

export default Portfolio