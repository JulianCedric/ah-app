import React from 'react';
import { Grid } from 'semantic-ui-react';
import PersonCard from './PersonCard';

class PersonsContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="persons-container">
                <Grid stackable columns={2}>
                    {this.props.persons.map(person => <PersonCard exercise={this.props.exercise} key={person.id} person={person}/>)}
                </Grid>
            </div>
        );
    }
}
 
export default PersonsContainer;