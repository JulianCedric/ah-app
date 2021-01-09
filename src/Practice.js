import React from 'react';
import './App.css';
import { Button, Checkbox, Form, Progress } from 'semantic-ui-react';

class Practice extends React.Component {
    state = { 
        goal: "",
        percent: 0
     }

     handleChange = e => {
         this.setState({ [e.target.name]: e.target.value })
     }

     handleSubmit = e => {
         
        this.setState({
            goal: ""
        })
     }

     increase = e => {
        this.setState({ percent: this.state.percent + 25 })
     }

    render() { 
        return (  
            <div style={{ color: 'grey' }}>
                <br/>
                <h3>Practice</h3>
                <br/>
                <hr/>
                <br/>
                <Progress percent={this.state.percent} indicating inverted /> 
                <br/>
                <br/> 
                <Checkbox onClick={this.increase}/><span> Morning Routine</span>
                <br/>
                <Checkbox onClick={this.increase}/><span> Mid-Day Routine</span>
                <br/>
                <Checkbox onClick={this.increase}/><span> Evening Routine</span>
                <br/>
                <br/>
                <Form className='center-contents' onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='Your Goal.. '
                            name='goal'
                            value={this.state.goal}
                            onChange={this.handleChange}
                        />
                        <Form.Button content='Submit' color='orange' />
                    </Form.Group>
                </Form>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
 
export default Practice;