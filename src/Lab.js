import React from 'react';
import { Button } from 'semantic-ui-react';
import Cues from './Cues';
import TableExample from './TableExample';
import Login from './Login';

const HABITS = [
    {
        id: 1, 
        cueType: 'situational',
        cueDesc: 'I find myself in an unproductive state.',
        cravingDesc: "I want to feel like I'm still making progress towards my goal.",
        response: "[ (0) I pull out my Index Card, which lists my tasks under two categories: LEFT-Brain & RIGHT-Brain Tasks, then (1) ] I complete a LEFT-Brain Task that I can easily handle at that moment.",
        reward: "I satisfy my craving to feel like I'm still making progress towards my goal." 
    }
]

class Lab extends React.Component {
    state = {  
        gameStarted: false,
        habits: [],
        renderCues: false
    }

    renderCues() {
        this.setState({renderCues: true})
        this.setState({gameStarted: true})
    }

    handleClickLoadData = e => {
        console.log('EVENT: USER CLICKED [ Load Data ] BUTTON.')
        this.setState({habits: HABITS})
    }

    handleClick = e => {
        console.log('EVENT: USER CLICKED [ Start Game ] BUTTON.')
        this.renderCues()
    }

    render() { 
        console.log('this.state.habits: ', this.state.habits)
        return (  
            <div style={{color: 'grey'}}>
                <br/>
                <h3>Lab</h3>
                
                <br/>
                <hr/>
                <br/>

                <Button inverted onClick={this.handleClickLoadData}>Load Data</Button>

                <br/>
                <br/>
                <br/>

                { this.state.gameStarted ? <h3 style={{color: 'white'}}>Good luck, Player1!</h3> : <span><br/><Button inverted color='violet' onClick={this.handleClick}>Start Game</Button></span> }
                { this.state.renderCues ? <Cues /> : null }
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        );
    }
}
 
export default Lab;