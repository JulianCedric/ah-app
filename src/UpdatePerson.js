import React from 'react';
import { Button, Card, Form, Input } from 'semantic-ui-react';

class UpdatePerson extends React.Component {
    state = {  
        userInput: '',
        UpdatedPerson: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitLogWorkout = e => {
        console.log('EVENT2: USER CLICKED [ Load Workout ] BUTTON.')
        let newHealth = parseInt((this.state.userInput) + (e)) 
        console.log('newHealth: ', newHealth)
    }

    render() {
        console.log('this.state.newHealth: ', this.state.newHealth)
        return (  
            <div className="update-person">
                <br/>
                <Card color='orange'>
                    
                    <Card.Content>
                        <Card.Header>How long is this workout?</Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <Form onSubmit={() => this.handleSubmitLogWorkout(this.props.person.health)}>
                        <Form.Group>
                            <Form.Input 
                                placeholder='0-120'
                                name='userInput'
                                value={this.state.health}
                                onChange={this.handleChange}
                                style={{ width: '50px'}}
                            />
                            <span><h3> minutes</h3> </span>
                            </Form.Group>
                            <Form.Group>
                            <br/>
                            <br/>
                            <Form.Button content='Log Workout'/>
                        </Form.Group>
                    </Form>
                    </Card.Content>
                </Card>
                <br/>
            </div>
        );
    }
}
 
export default UpdatePerson;