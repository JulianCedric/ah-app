import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';

class NewFeature extends React.Component {
    state = {  
        renderIndexCard: false
    }

    handleClickIndexCard = e => {
        console.log('EVENT: USER CLICKED [ Index Card ] BUTTON.')
        this.setState({ renderIndexCard: true })
    }

    render() { 
        return (            
            <div style={{color: 'grey'}}>
                <br/>
                <h3>New Feature</h3>
                
                <br/>
                <hr/>
                <br/>

                <Button color='yellow' onClick={this.handleClickIndexCard}>Index Card</Button>

                <br/>
                <br/>
                <br/>

                { this.state.renderIndexCard ? <img src="/images/IndexCardSystem.png" alt=""/> : null }

                

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
 
export default NewFeature;