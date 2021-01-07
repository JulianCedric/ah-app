import React from 'react';
import './App.css';
import { Button, Progress } from 'semantic-ui-react';
import StickifydHabits from './StickifydHabits';
import Tasks from './Tasks';
import CreateForm from './CreateForm';
import HabitsContainer from './HabitsContainer';
import Edit from './Edit';
import Stickifyd from './Stickifyd';
import TestRemind from './TestRemind';
import Datetime from 'react-datetime';

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
        habit: {},
        habits: [],
        habitEdit: {},
        habitStickifyd: {},
        habitTestRemind: {},
        person: {},
        persons: [],
        renderEdit: false,
        renderGrid: false,
        renderPersons: false,
        renderIndexCard: false,
        renderProgress: false,
        renderStickifyd: false,
        renderTestRemind: false,
        tasks: []
    }

    create = obj => {
        obj.id = this.state.habits.length + 1
        this.progressCard(obj)
        let arr = [...this.state.habits, obj]
        this.setState({ habits: arr })
        this.setState({ renderProgress: true })
    }

    progressCard = obj => {
        this.setState({ habit: obj })
    }

    delete = id => {
        let arr = this.state.habits.filter(habit => habit.id !== id)
        this.setState({ habits: arr })
    }

    edit = (id, desc) => {
        let arr = [...this.state.habits]
        let obj = arr.find(elem => elem.id === id)
        this.setState({ renderEdit: true })
        this.setState({ habitEdit: obj })
    }

    editSubmit = (id, desc) => {
        let arr = [...this.state.habits]
        let elem = arr.find(habit => habit.id === id)
        elem.desc = desc
        this.setState({ habits: arr })
        this.setState({ renderEdit: !this.state.renderEdit })
    } 

    exercise = (id, health) => {
    // When a user exercises, their health level increases by 10.
        // console.log('EVENT2: USER CLICKED [ Exercise ] BUTTON.')    
        let arr = [...this.state.persons]
        let obj = arr.find(person => person.id === id)
        obj.health = obj.health + 10
        this.setState({ persons: arr })
    } 

    handleClickLoadHabits = e => {
        // console.log('EVENT: USER CLICKED [ Load Habits ] BUTTON.')
        this.setState({ habits: HABITS })
    }

    handleClickLoadPersons = e => {
        // console.log('EVENT: USER CLICKED [ Load Tasks ] BUTTON.')
        this.setState({ persons: PERSONS })
        this.setState({ renderPersons: true })
    }

    handleClickLoadTasks = e => {
        // console.log('EVENT: USER CLICKED [ Load Tasks ] BUTTON.')
        this.setState({ tasks: TASKS })
    }

    handleClickIndexCard = e => {
        // console.log('EVENT: USER CLICKED [ Index Card ] BUTTON.')
        this.setState({ renderIndexCard: true })
        this.setState({ renderGrid: true })
    }

    // handleStickifyd = obj => {
    //     this.setState({ renderStickifyd: true })
    //     let arr = [...this.state.habits]
    //     let elem = arr.find(habit => habit.id === obj.id)
    //     elem.hide = false
    //     this.setState({ habits: arr })
    // }

    testRemind = (id, desc) => {
        let arr = [...this.state.habits]
        let obj = arr.find(elem => elem.id === id)
        this.setState({ renderTestRemind: true })
        this.setState({ habitTestRemind: obj })
    }

    testRemindSubmit = (id, desc) => {
        let arr = [...this.state.habits]
        let elem = arr.find(habit => habit.id === id)
        elem.winningStreak = elem.winningStreak + 1
        if (elem.winningStreak === 21) {
            // this.handleStickifyd(elem)
            // elem.hide = true
            this.setState({ habits: arr })
        }
        this.setState({ habits: arr })
        this.setState({ renderTestRemind: !this.state.renderTestRemind })
    }

    render() { 
        console.log("test")
        return (            
            <div style={{color: 'grey'}}>
                <br/>
                <h3>New Feature</h3>
                
                <Button onClick={this.handleClickLoadHabits} primary>Load Habits</Button>

                <br/>
                <br/>
                <hr/>
                <br/>

                <CreateForm create={this.create}/>

                <br/>
                <br/>
                <br/>

                <Progress inverted>
                    
                </Progress>

                {/* <br/>
                {this.state.renderEdit ? <Edit editSubmit={this.editSubmit} habitEdit={this.state.habitEdit} /> : null }
                <br/>

                <br/>
                {this.state.renderTestRemind ? <TestRemind testRemindSubmit={this.testRemindSubmit} habitTestRemind={this.state.habitTestRemind} /> : null }
                <br/>


                <Test />

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

                <Button onClick={this.handleClickLoadPersons} primary>Load Persons</Button>

                <br/>
                <br/>



                <br/>
                <br/>

                { this.state.renderPersons ? <StickifydHabits exercise={this.exercise} persons={this.state.persons}/> : null }


                <Button color='yellow' onClick={this.handleClickIndexCard}>Index Card</Button>

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
                <br/> */}

            </div>


        );
    }
}
 
export default NewFeature;