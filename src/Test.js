import React from 'react';

const HABITS = [
    {
        id: 1, 
        desc: 'Morning Routine',
        hide: false,
        startDate: Date(), 
        winningStreak: 0,
    },
    {
        id: 2,
        desc: 'Mid-Day Routine',
        hide: false,
        startDate: Date(), 
        winningStreak: 1
    },
    {
        id: 3,
        desc: 'Evening Routine',
        hide: false,
        startDate: Date(), 
        winningStreak: 21
    }
]

class Test extends React.Component {
    state = { arr: HABITS }

// Create

    create(obj) {
        let newArr = [... this.state.arr, obj]
        this.setState({ arr: newArr })
    }

// Read

    // Render

// Update

    update(id, desc) {
        let newArr = [...this.state.arr]
        let foundObj = newArr.find(obj => obj.id === id)
        foundObj.desc = desc
        this.setState({ arr: newArr })
    }

// Delete

    delete(id) {
        let newArr = this.state.arr.filter(obj => obj.id !== id)
        this.setState({ arr: newArr })
    }

    render() { 
        return (  
            <div>

            </div>
        );
    }
}
 
export default Test;