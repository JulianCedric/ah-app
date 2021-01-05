import React from 'react';
import { Form } from 'semantic-ui-react';

class CreateForm extends React.Component {
    state = {
        id: 0,
        desc: "",
        startDate: Date(),
        winningStreak: 0
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e, obj) => {
        console.log('EVENT: USER CLICKED [ Start ] BUTTON.')    
        e.preventDefault()
        this.props.create(this.state)
        this.setState({ 
            id: 0,
            desc: "",
            startDate: Date(),
            winningStreak: 0
        })   
    }

    render() {
        console.log(this.state)
        console.log(Date().toLocaleString())
        return (
            <div className="create-form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Add a New Habit..'
                            name='desc'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />     
                    </Form.Group>
                    <Form.Button color='green' content='Start' />
                </Form>
            </div>
        );
    }
}

export default CreateForm;