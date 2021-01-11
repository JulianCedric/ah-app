import React from 'react';
import './App.css';
import { Button, Checkbox, Form, Progress } from 'semantic-ui-react';
import CreateGoal from './CreateGoal';
import DailyProgress from './DailyProgress';

class Practice extends React.Component {
    state = { 
        goals: [],
        percent: 0,
        reTypedGoal: []
     }

     increase = e => {
        this.setState({ percent: this.state.percent + 25 })
     }

     match() {
        // (  ) ? console.log('true') : console.log('false') 
     }

     setGoal = obj => {
        let newArr = [...this.state.goals, obj]
        this.setState({ goals: newArr })
    }

    setReTypedGoal = obj => {
        let newArr = [...this.state.reTypedGoal, obj]
        this.setState({ reTypedGoal: newArr })
        this.match()
    }

    render() { 
        console.log('Current state of goals: ', this.state.goals)
        console.log('Current state of reTypedGoal: ', this.state.reTypedGoal)
        return (  
            <div style={{ color: 'grey' }}>
                <br/>
                <h3>Practice</h3>
                <br/>
                <hr/>
                <br/>
                <br/>
                <CreateGoal setGoal={this.setGoal}/> 
                <br/>
                <DailyProgress goal={this.state.goal} increase={this.increase} percent={this.state.percent} setReTypedGoal={this.setReTypedGoal} />
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
 
export default Practice;