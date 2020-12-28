import React from 'react';
import TableExample from './TableExample';
import GridExampleStackable from './GridExampleStackable';
import HabitLoopFramework from './HabitLoopFramework';
import { Button, Input } from 'semantic-ui-react';

class ThinkSpace extends React.Component {
    state = {  }
    render() { 
        return (  
            <div style={{color: 'grey'}}>
                <br/>
                <h3>Think Space</h3>
        
                <br/>
                <hr/>
                <br/>

                <h3>What new daily habit would you like to have?</h3>
                <Input placeholder='e.g. practice coding for 1 hour, do 20 pushups, etc.' style={{width: '350px'}}/>
                <br/>

                <GridExampleStackable />

                <HabitLoopFramework />

                <TableExample />

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
 
export default ThinkSpace;