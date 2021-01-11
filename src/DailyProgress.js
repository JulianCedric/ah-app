import React from 'react';
import { Button, Checkbox, Form, Progress } from 'semantic-ui-react';

class DailyProgress extends React.Component {
    state = {  
        goal: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        let reTypedGoal = this.state.goal
        this.props.setReTypedGoal(reTypedGoal)
        this.setState({
            goal: ""    
        })
     }

    render() { 
        return (  
            <div>
                <Progress percent={this.props.percent} indicating inverted/> 
                <br/>
                <br/> 
                <Checkbox onClick={this.props.increase}/><span> Morning Routine</span>
                <br/>
                <Checkbox onClick={this.props.increase}/><span> Mid-Day Routine</span>
                <br/>
                <Checkbox onClick={this.props.increase}/><span> Evening Routine</span>
                <br/>
                <br/>
                <Form className='center-contents' onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='Re-Type Your Goal.. '
                            name='goal'
                            value={this.props.goal}
                            onChange={this.handleChange}
                        />
                        <Form.Button content='Submit' color='orange' inverted/>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
 
export default DailyProgress;