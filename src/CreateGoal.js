import React from 'react';
import { Form } from 'semantic-ui-react';

class CreateGoal extends React.Component {
    state = {  
        yourGoal: ""
    }

    handleChangeYourGoal = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitYourGoal = e => {
        let obj = this.state.yourGoal
        this.props.setGoalA(obj)
        this.setState({
            yourGoal: ""    
        })
     }

    render() { 
        return (  
            <div className='center-contents'>
                <Form onSubmit={this.handleSubmitYourGoal}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='Your Goal.. '
                            name='yourGoal'
                            value={this.state.yourGoal}
                            onChange={this.handleChangeYourGoal}
                        />
                        <Form.Button content='Submit' color='orange'/>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
 
export default CreateGoal;