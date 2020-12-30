import React from 'react';
import './App.css';
import { Button, Card, Grid, Icon, Segment } from 'semantic-ui-react';

class PersonCard extends React.Component {
    state = {  }

    handleClickExercise = (id, health) => {
        console.log('EVENT1: USER CLICKED [ Exercise ] BUTTON.')
        this.props.exercise(id, health)
    }

    render() { 
        return (  
            <div className="center-content">
                <br/>
                <Grid.Column>
                    <Segment>
                        <Card>
                            <Card.Content>
                                <Card.Header>{this.props.person.name}</Card.Header>
                                <Card.Meta>
                                    <span className="health">{this.props.person.health}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.props.person.industry}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content>
                                <Button onClick={() => this.handleClickExercise(this.props.person.id, this.props.person.health)} primary>Exercise</Button>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    <span className="winning-streak">{this.props.person.winningStreak}</span> Day Winning Streak!
                                </a>
                            </Card.Content>
                        </Card>
                    </Segment>
                </Grid.Column>
                <br/>
            </div>
        );
    }
}
 
export default PersonCard;