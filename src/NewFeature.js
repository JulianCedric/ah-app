import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import PersonsContainer from './PersonsContainer';
import Tasks from './Tasks';

const PERSONS = [
    { 
        id: 1,
        industry: "Personal Development",
        name: "Julian",
        health: 50,
        winningStreak: 10
    },
    {
        id: 2,
        industry: "Personal Development",
        name: "Cedric",
        health: 100,
        winningStreak: 100
    }
]

const TASKS = [
    {
        id: 1,
        type: 'A',
        desc: 'EVENING ROUTINE',
        completed: false
    },
    {
        id: 2, 
        type: 'B',
        desc: 'WASH DISHES',
        completed: false
    },
    {
        id: 3,
        type: 'A',
        desc: 'MORNING ROUTINE',
        completed: false
    },
    {
        id: 4, 
        type: 'A',
        desc: "IS EVERYTHING BACK IN IT'S PROPER PLACE?",
        completed: false 
    }
]

class NewFeature extends React.Component {
    state = {  
        person: {},
        persons: [],
        renderGrid: false,
        renderPersons: false,
        renderIndexCard: false,
        tasks: []
    }

    exercise = (id, health) => {
    // When a user exercises, their health level increases by 10.
        console.log('EVENT2: USER CLICKED [ Exercise ] BUTTON.')    
    
        let arr = [...this.state.persons]
        let obj = arr.find(person => person.id === id)
        obj.health = obj.health + 10
        this.setState({ persons: arr })
    }

    handleClickLoadPersons = e => {
        console.log('EVENT: USER CLICKED [ Load Tasks ] BUTTON.')
        this.setState({ persons: PERSONS })
        this.setState({ renderPersons: true })
    }

    handleClickLoadTasks = e => {
        console.log('EVENT: USER CLICKED [ Load Tasks ] BUTTON.')
        this.setState({ tasks: TASKS })
    }

    handleClickIndexCard = e => {
        console.log('EVENT: USER CLICKED [ Index Card ] BUTTON.')
        this.setState({ renderIndexCard: true })
        this.setState({ renderGrid: true })
    }

    render() { 
        console.log('this.state.person: ', this.state.person)
        console.log('this.state.persons: ', this.state.persons)
        return (            
            <div style={{color: 'grey'}}>
                <br/>
                <h3>New Feature</h3>
                
                <br/>
                <hr/>
                <br/>

                <Button onClick={this.handleClickLoadPersons} primary>Load Persons</Button>

                <br/>
                <br/>

                { this.state.renderPersons ? <PersonsContainer exercise={this.exercise} persons={this.state.persons}/> : null }


                {/* <Button color='yellow' onClick={this.handleClickIndexCard}>Index Card</Button> */}

                <br/>
                <br/>
                <br/>

                { this.state.renderIndexCard ? <img src="/images/IndexCardSystem.png" alt=""/> : null }

                <br/>
                <br/>

                { this.state.renderGrid ? <Tasks handleClickLoadTasks={this.handleClickLoadTasks} tasks={this.state.tasks}/> : null }

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        );
    }
}
 
export default NewFeature;