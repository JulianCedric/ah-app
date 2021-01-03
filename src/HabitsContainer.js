import React from 'react';
import Habit from './Habit';
import { Container, Menu, Segment } from 'semantic-ui-react';

class HabitsContainer extends React.Component {
    state = {  
        activeItem: 'saved'
    }

    handleClickItem = (e, {name}) => {
        console.log('EVENT: USER CLICKED ON MENU ITEM: ', {name})
        this.setState({ activeItem: name })
    }

    render() { 
        const {activeItem} = this.state
        const {habits} = this.props
        return (  
            <div>
                <Menu inverted pointing secondary stackable>
                    <Menu.Item name='saved' active={activeItem === 'saved'} onClick={this.handleClickItem}>
                        Saved
                    </Menu.Item>
                    <Menu.Item name='started' active={activeItem === 'started'} onClick={this.handleClickItem}>
                        Started
                    </Menu.Item>
                    <Menu.Item name='stickifyd' active={activeItem === 'stickifyd'} onClick={this.handleClickItem}>
                        Stickify'd
                    </Menu.Item>
                </Menu>
                <Container>
                    { activeItem === 'saved' ? 
                        <Segment>
                            {habits.map(habit => habit.winningStreak === 0 ? <Habit habit={habit}/> : null )}
                        </Segment>
                    : null }
                    { activeItem === 'started' ? 
                        <Segment>
                            {habits.map(habit => habit.winningStreak > 0 && habit.winningStreak < 21 ? <Habit delete={this.props.delete} edit={this.props.edit} habit={habit} testRemind={this.props.testRemind}/> : null )}
                        </Segment>
                    : null }
                    { activeItem === 'stickifyd' ? 
                        <Segment>
                            {habits.map(habit => habit.winningStreak === 21 ? <Habit habit={habit}/> : null )}
                        </Segment>
                    : null }
                </Container>
            </div>
        );
    }
}
 
export default HabitsContainer;