import React from 'react';
import { Card } from 'semantic-ui-react';

class Stickifyd extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Card inverted>
                    <Card.Header>
                        Stickify'd Habits
                    </Card.Header>
                    <Card.Content>
                        {this.props.habitStickifyd.desc}
                    </Card.Content>
                </Card>
            </div>
        );
    }
}
 
export default Stickifyd;