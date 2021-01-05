import React from 'react';
import './App.css';
import { Container, Menu, Segment } from 'semantic-ui-react';
import EmptyCard from './EmptyCard';


class Test extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="">
                <div className="parent">
                    <header className="header-section">
                        <Menu inverted fluid widths={3}>
                            <Menu.Item>
                                Saved
                            </Menu.Item>
                            <Menu.Item>
                                Started
                            </Menu.Item>
                            <Menu.Item>
                                Stickify'd
                            </Menu.Item>
                        </Menu>
                    </header>
                </div>
                <div className="center-contents">
                    <Segment.Group horizontal>
                        <div className="child">
                            <Segment>
                                <EmptyCard />
                            </Segment>
                        </div>
                        <div className="child">
                            <Segment>
                                <EmptyCard />
                            </Segment>
                        </div>
                        <div className="child">
                            <Segment>
                                <EmptyCard />
                            </Segment>
                        </div>
                    </Segment.Group>
                </div>

    {/* <div className="left-side" contenteditable>Left Sidebar</div>
    <main className="main" contenteditable> Main Content</main>
    <div className="right-side" contenteditable>Right Sidebar</div>
    <footer className="footer">Footer</footer> */}
  </div>

        );
    }
}
 
export default Test;