// import React from 'react';
// import Habit from './Habit';
// import { Container, Menu, Segment } from 'semantic-ui-react';
// // import EmptyCard from './EmptyCard';

// class HabitsContainer extends React.Component {
//     state = {  
//         activeItem: 'started'
//     }

//     handleClickItem = (e, {name}) => {
//         console.log('EVENT: USER CLICKED ON MENU ITEM: ', {name})
//         this.setState({ activeItem: name })
//     }

//     render() { 
//         const {activeItem} = this.state
//         const {habits} = this.props
//         return (  
//             <div>
//                 <div className="habits-menu">
//                     <Menu inverted pointing secondary stackable>
//                         <Menu.Item name='saved' active={activeItem === 'saved'} onClick={this.handleClickItem}>
//                             Saved
//                         </Menu.Item>
//                         <Menu.Item name='started' active={activeItem === 'started'} onClick={this.handleClickItem}>
//                             Started
//                         </Menu.Item>
//                         <Menu.Item name='stickifyd' active={activeItem === 'stickifyd'} onClick={this.handleClickItem}>
//                             Stickify'd
//                         </Menu.Item>
//                     </Menu>
//                 </div>
//                 <div className="habits-container-parent">

//                         <Segment.Group horizontal>
//                             <div className="child">
//                                 <Segment>
//                                     { activeItem === 'saved' ? 
//                                         <div>
//                                             {habits.map(habit => habit.winningStreak === 0 ? <Habit delete={this.props.delete} edit={this.props.edit} habit={habit} testRemind={this.props.testRemind}/> : null )}
//                                         </div>
//                                     : <EmptyCard /> }
//                                 </Segment>
//                             </div>
//                             <div className="child">
//                                 <Segment>
//                                     { activeItem === 'saved' ? 
//                                         <div>
//                                             {habits.map(habit => habit.winningStreak > 0 && habit.winningStreak < 21 ? <Habit delete={this.props.delete} edit={this.props.edit} habit={habit} testRemind={this.props.testRemind}/> : null )}
//                                         </div>
//                                     : <EmptyCard /> }
//                                 </Segment>
//                             </div>
//                             <div className="child">
//                                 <Segment>
//                                     { activeItem === 'stickifyd' ? 
//                                         <div>
//                                             {habits.map(habit => habit.winningStreak === 21 ? <Habit delete={this.props.delete} edit={this.props.edit} habit={habit} testRemind={this.props.testRemind}/> : null )}
//                                         </div>
//                                     : <EmptyCard /> }
//                                 </Segment>
//                             </div>
//                         </Segment.Group>

//                 </div>
//             </div>
//         );
//     }
// }
 
// export default HabitsContainer;