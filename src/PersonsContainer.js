import React from 'react';
import PersonCard from './PersonCard';

class PersonsContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="persons-container">
                {this.props.persons.map(person => <PersonCard exercise={this.props.exercise} key={person.id} person={person}/>)}
            </div>
        );
    }
}
 
export default PersonsContainer;