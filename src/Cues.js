import React from 'react';
import { Button } from 'semantic-ui-react';
import HabitLoopFramework from './HabitLoopFramework';
import MenuExample from './MenuExample';

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

                <HabitLoopFramework />

                <MenuExample/>

            </div>
        );
    }
}
 
export default Cues;