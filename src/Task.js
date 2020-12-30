import React from 'react';

class Task extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p>{this.props.task.desc}</p>
            </div>
        );
    }
}
 
export default Task;