import React from 'react';
import { Button } from 'semantic-ui-react';
import Cues from './Cues';

class Home extends React.Component {
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
            <div style={{color: 'white'}}>
                <br/>
                { this.state.gameStarted ? 'Good luck, Player1!' : <Button inverted onClick={this.handleClick}>Start Game</Button> }
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

            </div>
        );
    }
}
 
export default Home;