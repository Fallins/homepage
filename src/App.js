import React, { Component } from 'react';
import { Button, Icon, Card, Image } from 'semantic-ui-react'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<main className="center">
					<div className="mycard">
						<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
						<h4>Lorem ipsum dolor sit amet consectetur.</h4>
						<Button animated>
							<Button.Content visible>Next</Button.Content>
							<Button.Content hidden>
								<Icon name='arrow right' />
							</Button.Content>
						</Button>
						<Button animated>
							<Button.Content visible>Next</Button.Content>
							<Button.Content hidden>
								<Icon name='arrow right' />
							</Button.Content>
						</Button>
					</div>
				</main>
			</div>
		)
	}
}

export default App;
{/* <Card centered className="mycard">
						<Card.Content>
							<Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
							<Card.Header>Steve Sanders</Card.Header>
							<Card.Meta>Friends of Elliot</Card.Meta>
							<Card.Description>
								Steve wants to add you to the group <strong>best friends</strong>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className='ui two buttons'>
								<Button animated>
									<Button.Content visible>Next</Button.Content>
									<Button.Content hidden>
										<Icon name='arrow right' />
									</Button.Content>
								</Button>							
							</div>
						</Card.Content>
					</Card> */}