import React from 'react';
import { Card } from 'semantic-ui-react';

class EmptyCard extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="empty-card">
                <Card>
                    <Card.Header>Empty Card</Card.Header>  
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Card>

            </div>
        );
    }
}
 
export default EmptyCard;