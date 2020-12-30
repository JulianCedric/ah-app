import React from 'react';
import { Button } from 'semantic-ui-react';
import Task from './Task';

class Tasks extends React.Component {
  state = {  }

  

  render() { 
    return (  
      <div>
        <h3>TODAY'S TASKS</h3>
        <Button onClick={this.props.handleClickLoadTasks}>Load Tasks</Button>
        <br/>
        <br/>
        {this.props.tasks.map(task => <Task key={task.id} task={task}/>)}
      </div>
    );
  }
}
 
export default Tasks;