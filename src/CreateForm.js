import React from 'react';
import { Form } from 'semantic-ui-react';

class CreateForm extends React.Component {
    state = {
        id: 0,
        desc: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = obj => {
        console.log('EVENT: USER CLICKED [ Save ] BUTTON.')    
        this.props.create(this.state)   
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Add a New Habit..'
                            name='desc'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />     
                    </Form.Group>
                    <Form.Button content='Save' />
                </Form>
            </div>
        );
    }
}

export default CreateForm;