import React from 'react';
import Habit from './Habit';

class HabitsContainer extends React.Component {
    state = {  }
    render() { 
        console.log(this.props.habits)
        return (  
            <div>
                <p>Saved Habits</p>
                <br/>
                {this.props.habits.map(habit => <Habit delete={this.props.delete} edit={this.props.edit} habit={habit} testRemind={this.props.testRemind}/>)}
            </div>
        );
    }
}
 
export default HabitsContainer;