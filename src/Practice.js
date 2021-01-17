import React from 'react';
import './App.css';
import { Button, Checkbox, Form, Progress, Table } from 'semantic-ui-react';
import CreateGoal from './CreateGoal';
import DailyProgress from './DailyProgress';
import Algo from './Algo';
import TableExampleUnstackable from './TableExampleUnstackable';

class Practice extends React.Component {
    state = { 
        goalA: {},
        goalB: {},
        percent: 0
     }

     increase = e => {
        this.setState({ percent: this.state.percent + 25 })
     }

    match() {
        let a = this.state.goalA
        let b = this.state.goalB
        { ( a === b ) ? console.log('true') : console.log('false') }
     }

    setGoalA = obj => {
        let newObj = {obj}
        this.setState({ goalA: newObj })
    }

    setGoalB = obj => {
        let newObj = {obj}
        this.setState({ goalB: newObj })
        this.match()
    }

    render() { 
        console.log('Current state of goalA: ', this.state.goalA)      
        console.log('Current state of goalB: ', this.state.goalB)
        return (  
            <div style={{ color: 'grey' }}>
                <br/>
                <h3>Practice</h3>
                <br/>
                <hr/>
                <br/>
                <br/>
                <CreateGoal setGoalA={this.setGoalA}/> 
                <br/>
                <DailyProgress goalA={this.state.goalA} increase={this.increase} percent={this.state.percent} setGoalB={this.setGoalB} />
                <br/>
                <br/>
                <Algo />
                <br/>
                <br/>
                <br/>
                <TableExampleUnstackable />
                <br/>
            </div>
        );
    }
}
 
export default Practice;