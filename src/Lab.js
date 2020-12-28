import React from 'react';
import { Button } from 'semantic-ui-react';
import Cues from './Cues';
import TableExample from './TableExample';
import Login from './Login';

class Lab extends React.Component {
    state = {  
        gameStarted: false,
        playerName: '',
        renderCues: false
    }

    renderCues() {
        this.setState({renderCues: true})
        this.setState({gameStarted: true})
    }

    handleClick = e => {
        console.log('EVENT: USER CLICKED [ Start Game ] BUTTON.')
        this.renderCues()
    }

    render() { 
        return (  
            <div style={{color: 'grey'}}>
                <br/>
                <h3>Lab</h3>
                
                <br/>
                <hr/>
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