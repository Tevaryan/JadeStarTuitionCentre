import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../App.css';

class ContactUspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        recipient :'tevaryan1993@gmail.com',
        sender: '',
        subject: '',
        text: ''
      }
    };
  }

  sendEmail = () => {
    const email = this.state.email
    fetch(`https://demonodejstest.herokuapp.com/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
    .catch(err => console.error(err))
    window.location.reload();
  }

  render() {
    const email = this.state.email;
    return (
      <div style={{backgroundColor: '#e7e6f5', backgroundRepeat:'repeat-y', height:'100%'}}>
        <Navbar/>

        <div className="d-flex justify-content-center mt-5">
          <div className="d-flex flex-column">
            <h1 className="pt-5 text-center ContactUsTitleText" style={{fontSize:'350%'}}>We'd love to hear from you</h1>
            <Form className="p-5">
              <FormGroup>
                <Label for="exampleEmail" className='ContactTitle'>Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="state your email here" value={email.sender}
                  onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
              </FormGroup>
              <FormGroup>
                <Label className='ContactTitle'>Subject</Label>
                <Input placeholder="I would like to sign up my daughter for Add Maths classes for her upcoming SPM" value={email.subject}
                  onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText" className='ContactTitle'>Tell us more about it</Label>
                <Input type="textarea" name="text" id="exampleText" value={email.text} placeholder="What is your schedule and how big is the class size?"
                  onChange={e => this.setState({ email: { ...email, text: e.target.value } })}/>
              </FormGroup>
              <FormGroup>
                {/* <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText> */}
              </FormGroup>
              <Button  onClick={this.sendEmail} className="px-3 BookingButton" style={{borderRadius:'10px', backgroundColor:'#90ee90', border:'none'}}>
                <text className="ButtonText">Submit</text>
                </Button>
              <br/>
              <div className='mt-3'>
                <h6 className="Description">Also contact us here,</h6>
                <div className='mt-2 ContactTitle' >
                  <h5>Address:</h5>
                  <p className="Description">
                      42-1, Jalan Jade Hills Utama, Commerce Village, Kajang
                  </p>
                  <h5 className='ContactTitle'>Contact:</h5>
                  <p className="Description">
                      +6016-339 6675
                  <br/>
                      +6016-369 1361
                  </p>
                </div>
              </div>
            </Form>

          </div>
        </div>
        <div class="footer" style={{ backgroundColor: '#e7e6f5', height:'100%'}}>
        </div>
      </div>
    );
  }
}

export default ContactUspage;