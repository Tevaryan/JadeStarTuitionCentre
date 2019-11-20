import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ModalHeader } from 'reactstrap';
import '../App.css';

class SubmitChosenSubjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        recipient :'tevaryan1993@gmail.com',
        sender: '',
        subject: 'Hi there, I would like to book these subjects',
        text: this.props.chosenSubjects,
        chosen:[]
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
    const chosen = this.state.chosen
    return (
      <div style={{backgroundColor: '#e7e6f5', backgroundRepeat:'repeat-y', height:'100%'}}>
        <div className="d-flex justify-content-center mt-5">
          <div className="d-flex flex-column">
          <ModalHeader toggle={this.props.toggle}>We will get back to you shortly!</ModalHeader>
            <Form className="p-2">
              <FormGroup>
                <Label for="exampleEmail" className='ContactTitle'>Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="state your email here" value={email.sender}
                  onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
              </FormGroup>
              <div className="d-flex flex-column py-3" style={{width:'100%'}}>
                <div className="ContactTitle">
                  Subjects Chosen
                </div>
                    {
                      this.props.chosenSubjects.map(subjects =>
                        <div className="d-flex ml-2 w-50 justify-content-start">
                            {subjects.subject}({subjects.course})
                        </div>
                      )
                    }
                </div>

              <div className="d-flex flex-row justify-content-center" style={{width:'100%'}}>
                <div className="mx-auto">
                <Button  onClick={this.sendEmail} className="px-3 BookingButton" style={{borderRadius:'10px', backgroundColor:'#90ee90', border:'none'}}>
                    <text className="ButtonText">Book</text>
                  </Button>
                </div>
                <div className="mx-auto">
                <Button  onClick={this.props.toggle} className="px-3 ModalCloseButton " style={{borderRadius:'10px',      backgroundColor:'#9e3846', border:'none'}}>
                    <text className="text-white" >Close</text>
                  </Button>
                </div>
              </div>
            </Form>
            <br/>

          </div>
        </div>
        <div class="footer" style={{ backgroundColor: '#e7e6f5', height:'100%'}}>
        </div>
      </div>
    );
  }
}

export default SubmitChosenSubjectModal;