import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class FormExample extends React.Component {
  state = {  }
  render() { 
    return (  
<Segment inverted style={{width: '500px'}} >
    <Form inverted>

      <Form.Group>
        <Form.Input placeholder='Enter Cue.. ' style={{width: '400px'}} />
      </Form.Group>

      <Form.Group>
        <Form.Input placeholder='Enter Craving.. ' style={{width: '400px'}} />
      </Form.Group>

      <Form.Group>
        <Form.Input placeholder='Enter Response.. ' style={{width: '400px'}} />
      </Form.Group>

      <Form.Group>
        <Form.Input placeholder='Enter Reward.. ' style={{width: '400px'}} />
      </Form.Group>

      <Form.Checkbox label='I agree to the Terms and Conditions'  />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
    );
  }
}
 
export default FormExample;