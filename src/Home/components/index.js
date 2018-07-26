import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import style from '../home.css';

const Home = () => {
    return (
        <main className={style.center}>
            <div className={style.mycard}>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <div className={style.Btn_Group}>
                    <Link to="/about">
                        <Button animated className={style.mr_15} size="large" color="teal">
                            <Button.Content visible>
                                <Icon name='address card outline' size="large" fitted/>
                            </Button.Content>
                            <Button.Content hidden>About</Button.Content>
                        </Button>
                    </Link>

                    <Link to="/portfolio">
                        <Button animated size="large" >
                            <Button.Content visible>
                                <Icon name='code' size="large" fitted/>
                            </Button.Content>
                            <Button.Content hidden>Portfolio</Button.Content>
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home