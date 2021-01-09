import React from 'react';
import './App.css';
import { Button, Checkbox, Progress } from 'semantic-ui-react';

class Practice extends React.Component {
    state = { 
        percent: 0
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
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
 
export default Practice;