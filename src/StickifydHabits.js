import React from 'react';
import { Grid } from 'semantic-ui-react';
import StickifydHabit from './StickifydHabit';

class StickifydHabits extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="persons-container">
                <Grid stackable columns={2}>
                    {this.props.persons.map(person => <StickifydHabit exercise={this.props.exercise} key={person.id} person={person}/>)}
                </Grid>
            </div>
        );
    }
}
 
export default StickifydHabits;