import React from 'react';

class UpdatePerson extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p>{this.props.person.health}</p>
            </div>
        );
    }
}
 
export default UpdatePerson;