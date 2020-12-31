import React from 'react';
import { Form } from 'semantic-ui-react';
import Habit from './Habit';

class Edit extends React.Component {
    state = {
        id: 0,
        desc: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (id, desc) => {
        console.log('EVENT: USER CLICKED [ Submit Changes ] BUTTON.')    
        this.props.editSubmit(this.props.habitEdit.id, this.state.desc)   
    }

    render() {
        console.log(this.props.habitEdit)
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder={this.props.habitEdit.desc}
                            name='desc'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />     
                    </Form.Group>
                    <Form.Button content='Submit Changes' />
                </Form>
            </div>
        );
    }
}

export default Edit;