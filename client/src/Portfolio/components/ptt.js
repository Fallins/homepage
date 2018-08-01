import React from 'react'
import { Grid, Button, Dropdown, Loader, Label} from 'semantic-ui-react'
import style from './index.css'

const Ptt = (props) => {    
        const { value, textOnly, options, postsList, loadingList, post, 
            loadingPost, textOnlyHandler, handleChange, getPost} = props
            console.log({post})

        let Push
        if(post && post.pushes) {
            Push = post.pushes.map(push => (
                <div>
                    <span className={style.postContent__pushUser}>{push.userid}</span>
                    <span className={style.postContent__pushContent}>{push.content}</span>                
                </div>
            ))
        }

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
                            search
                        />                           
                    </Grid.Column>  
                </Grid.Row>                   
                {
                    value ? (
                        <Grid.Row centered>
                            <Grid.Column computer={6} mobile={15}>
                                <div className={style.sideListContainer}>
                                    <div className={style.sideList}>                                            
                                        {
                                            !loadingList ? (
                                                postsList.posts.map((item, idx) => (
                                                    <div className={style.sideList__item} key={`${item.title}_${idx}`} onClick={() => getPost(item.href)}>
                                                        {item.date}
                                                        <span className={style.sideList__itemTitle}>{item.title}</span>                                                     
                                                    </div>
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
                            
                            <Grid.Column computer={10} mobile={15}>
                                <div className={style.postContentContainer}>
                                    <Button.Group style={{margin: "1rem"}}>
                                        <Button positive={textOnly} onClick={() => textOnlyHandler(true)}>文</Button>
                                        <Button.Or />
                                        <Button positive={!textOnly} onClick={() => textOnlyHandler(false)}>圖</Button>
                                    </Button.Group>
                                    <div className={style.postContent}> 
                                        {
                                            loadingList ? null : 
                                                loadingPost ? (
                                                    <div className={style.sideList__loader}>
                                                        <Loader active/>                                                        
                                                    </div>
                                                ) : (
                                                    <div>
                                                        {
                                                            post.auther ? (
                                                                <div className={style.postContent__header}>
                                                                    <Label basic color="grey">{post.auther}</Label>
                                                                    <Label basic color="grey">{post.time}</Label>
                                                                </div>
                                                            ) : null
                                                        }
                                                        
                                                        <div className={style.postContent__content} 
                                                            dangerouslySetInnerHTML={textOnly ? {__html: post.content} : {__html: post.html}}></div>
                                                        <div className={style.postContent__pushes}>{Push}</div>
                                                    </div> 
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