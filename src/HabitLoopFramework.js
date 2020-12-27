import React from 'react';
import { Breadcrumb, Divider } from 'semantic-ui-react'

class HabitLoopFramework extends React.Component {
    state = {  }

    render() { 
        return (  
            <React.Fragment>
                <Breadcrumb style={{color: 'white'}} size='massive'>
                <Breadcrumb.Section link>Cue</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section link>Craving</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section link>Response</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Breadcrumb.Section link>Reward</Breadcrumb.Section>
                </Breadcrumb>
                <Divider hidden />
            </React.Fragment>
        );
    }
}
 
export default HabitLoopFramework; 