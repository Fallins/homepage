import React from 'react'
import { Grid, Button, Dropdown, Loader, } from 'semantic-ui-react'
import style from './index.css'

const Ptt = (props) => {    
        const { value, textOnly, options, postsList, loadingList, post, 
            loadingPost, textOnlyHandler, handleChange, getPost} = props
        
        return (
            <Grid columns='equal' style={{marginBottom: "0"}}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Dropdown
                            onChange={handleChange}
                            options={options}
                            placeholder='Choose an option'
                            selection
                            value={value}
                        />   
                    </Grid.Column>  
                </Grid.Row>                   
                {
                    value ? (
                        <Grid.Row>
                            <Grid.Column computer={6} mobile={16}>
                                <div className={style.sideListContainer}>
                                    <div className={style.sideList}>                                            
                                        {
                                            !loadingList ? (
                                                postsList.posts.map((item, idx) => (
                                                    <div className={style.sideList__item} key={`${item.title}_${idx}`} onClick={() => getPost(item.href)}>{item.title}</div>
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

                            <Grid.Column width={16}>                            
                                <Button.Group style={{margin: "1rem"}}>
                                    <Button positive={textOnly} onClick={() => textOnlyHandler(true)}>文</Button>
                                    <Button.Or />
                                    <Button positive={!textOnly} onClick={() => textOnlyHandler(false)}>圖</Button>
                                </Button.Group>  
                            </Grid.Column>  
                            
                            <Grid.Column computer={10} mobile={16}>
                                <div className={style.postContentContainer}>
                                    <div className={style.postContent}> 
                                        {
                                            loadingList ? null : 
                                                loadingPost ? (
                                                    <div className={style.sideList__loader}>
                                                        <Loader active/>                                                        
                                                    </div>
                                                ) : (
                                                    <div className={style.postContent__content} dangerouslySetInnerHTML={textOnly ? {__html: post.content} : {__html: post.html}}></div>
                                                )
                                        }
                                    </div>
                                </div>
                            </Grid.Column>               
                        </Grid.Row>    
                    ) : null
                }                          
            </Grid>
        )
}

export default Ptt