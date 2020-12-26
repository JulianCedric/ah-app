import React from 'react';
import { Button } from 'semantic-ui-react';

class Cues extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <br/>
                <br/>
                <Button inverted>Cue 1</Button>
                <br/>
                <br/>
                <Button inverted>Cue 2</Button>
                <br/>
                <br/>
                <Button inverted>Cue 3</Button>
                <br/>
                <br/>
            </div>
        );
    }
}
 
export default Cues;