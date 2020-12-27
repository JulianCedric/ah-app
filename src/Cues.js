import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import GridExampleStackable from './GridExampleStackable';
import HabitLoopFramework from './HabitLoopFramework';

class Cues extends React.Component {
    state = {  
        cueActive: false,
        cravingActive: false,
        responseActive: false,
        rewardActive: false
    }

    handleClickHabitLoop1 = e => {
        console.log('EVENT: USER CLICKED [ Habit Loop 1 ] BUTTON.')
    }

    handleClickHabitLoop2 = e => {
        console.log('EVENT: USER CLICKED [ Habit Loop 2 ] BUTTON.')
    }

    handleClickHabitLoop3 = e => {
        console.log('EVENT: USER CLICKED [ Habit Loop 3 ] BUTTON.')
    }

    render() { 
        return (  
            <div>
                <br/>
                <h3>What new daily habit would you like to have?</h3>
                <Input placeholder='e.g. practice coding for 1 hour, do 20 pushups, etc.' style={{width: '350px'}}/>
                <br/>
                <br/>
                <Button inverted color='orange' onClick={this.handleClickHabitLoop1}>Habit Loop 1</Button>
                <br/>
                <br/>
                <Button inverted color='orange' onClick={this.handleClickHabitLoop2}>Habit Loop 2</Button>
                <br/>
                <br/>
                <Button inverted color='orange' onClick={this.handleClickHabitLoop3}>Habit Loop 3</Button>
                <br/>
                <br/>
                <br/>

                <GridExampleStackable />

                <br/>

                <HabitLoopFramework />


            </div>
        );
    }
}
 
export default Cues;