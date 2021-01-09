import React from 'react';
import './App.css';
import { Progress } from 'semantic-ui-react';

class Practice extends React.Component {
    state = {  }
    render() { 
        return (  
            <div style={{ color: 'grey' }}>
                <br/>
                <h3>Practice</h3>
                <br/>
                <hr/>
                <br/>
                <Progress inverted /> 
                <br/> 
                <p>MR</p>
                <br/>
                <p>M-DR</p>
                <br/>
                <p>ER</p>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
 
export default Practice;