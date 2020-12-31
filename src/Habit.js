import React from 'react';
import { Button, Card } from 'semantic-ui-react';

class Habit extends React.Component {
    state = {  }

    handleClickDelete = id => {
        console.log('EVENT: USER CLICKED [ Delete ] BUTTON.')
        this.props.delete(id)
    }

    handleClickEdit = (id, desc) => {
        console.log('EVENT: USER CLICKED [ Edit ] BUTTON.')
        this.props.edit(id, desc)
    }

    render() { 
        console.log(this.props.habit)
        return (  
            <div>
                <Card>
                    <Card.Content>
                        <Card.Header>{this.props.habit.desc}</Card.Header>
                        <p>{this.props.habit.id}</p>
                        <Button onClick={() => this.handleClickEdit(this.props.habit.id, this.props.habit.desc)}>Edit</Button>
                        <Button onClick={() => this.handleClickDelete(this.props.habit.id)}>Delete</Button>
                    </Card.Content>
                </Card>
                <br/>
            </div>
        );
    }
}
 
export default Habit;