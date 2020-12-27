import React from 'react';
import { Button } from 'semantic-ui-react';
import Cues from './Cues';
import TableExample from './TableExample';

class G1 extends React.Component {
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
                    <h3>G1</h3>
                <br/>
                <hr/>
                <br/>
                { this.state.gameStarted ? <h7>Good luck, Player1!</h7> : <Button inverted color='violet' onClick={this.handleClick}>Start Game</Button> }
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

                <TableExample />

            </div>
        );
    }
}
 
export default G1;