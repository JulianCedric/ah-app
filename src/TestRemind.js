import React from 'react';
import { Form } from 'semantic-ui-react';
import Habit from './Habit';

class TestRemind extends React.Component {
    state = {
        id: 0,
        desc: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (id, desc) => {
        console.log('EVENT: USER CLICKED [ Submit ] BUTTON.')    
        if ( this.state.desc === this.props.habitTestRemind.desc) {
            this.props.testRemindSubmit(this.props.habitTestRemind.id, this.state.desc)
        } else {
            alert('Error: Please Try Again')
        }
        this.setState({ desc: "" })
   
    }

    render() {
        return (
            <div>
                <Form inverted onSubmit={this.handleSubmit} style={{color: 'white'}}>
                    <Form.Group>
                        <Form.Input
                            label='Please Re-Type Your Habit:'
                            placeholder={this.props.habitTestRemind.desc}
                            name='desc'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />     
                    </Form.Group>
                    <Form.Button content='Submit' />
                </Form>
            </div>
        );
    }
}

export default TestRemind;