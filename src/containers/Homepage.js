import React, { Component } from 'react';
import Navbar from '../containers/Navbar.js';
import MainTitle from '../components/MainTitle.js'
import '../App.css';
import circles from "../assets/background-cricle.png"
import poster from "../assets/campPic.jpg"
import StackGrid from "react-stack-grid";


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SPM:[
          {
            "subject": 'Economics',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'Perdagangan',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'General Science',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'Physics',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'Biology',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'Chemistry',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'Sejarah',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'Bahasa Malaysia',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
          ,
          {
            "subject": 'English',
            "color":'',
            "clicked": false,
            "course": 'SPM'
          }
      ],
      IGCSE:[
        {
          "subject": 'Combined Science',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Chemistry',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Physics',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'English',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Biology',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Maths',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Add Maths',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Bussines Studies',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Bahasa Malaysia',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Accounting',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Mandarin',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'English',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
        ,
        {
          "subject": 'Information and Communications Technology',
          "color":'',
          "clicked": false,
          "course": 'IGCSE'
        }
      ],
      STPM:[
        {
          "subject": 'General Studies',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'Chinese Language',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'General Science',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'Physics',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'Biology',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'Chemistry',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'Economics',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'Accounting',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }
        ,
        {
          "subject": 'Mathematics',
          "color":'',
          "clicked": false,
          "course": 'STPM'
        }

      ],
      IBDIPLOMA: [
        {
          "subject": 'Studies in Language and Literature',
          "color":'',
          "clicked": false,
          "course": 'IBDIPLOMA'
        }
        ,
        {
          "subject": 'Physics',
          "color":'',
          "clicked": false,
          "course": 'IBDIPLOMA'
        }
        ,
        {
          "subject": 'Biology',
          "color":'',
          "clicked": false,
          "course": 'IBDIPLOMA'
        }
        ,
        {
          "subject": 'Chemistry',
          "color":'',
          "clicked": false,
          "course": 'IBDIPLOMA'
        }
        ,
        {
          "subject": 'Mathematics',
          "color":'',
          "clicked": false,
          "course": 'IBDIPLOMA'
        }
      ],
      IBMYP: [
        {
          "subject": 'Add Maths',
          "color":'',
          "clicked": false,
          "course": 'IBMYP'
        }
        ,
        {
          "subject": 'Mathematics',
          "color":'',
          "clicked": false,
          "course": 'IBMYP'
        }
        ,
        {
          "subject": 'Physics',
          "color":'',
          "clicked": false,
          "course": 'IBMYP'
        }
        ,
        {
          "subject": 'Biology',
          "color":'',
          "clicked": false,
          "course": 'IBMYP'
        }
        ,
        {
          "subject": 'Chemistry',
          "color":'',
          "clicked": false,
          "course": 'IBMYP'
        }
      ],
      PT3: [
        {
          "subject": 'Bahasa Malaysia',
          "color":'',
          "clicked": false,
          "course": 'PT3'
        }
        ,
        {
          "subject": 'Geografi',
          "color":'',
          "clicked": false,
          "course": 'PT3'
        }
        ,
        {
          "subject": 'Science',
          "color":'',
          "clicked": false,
          "course": 'PT3'
        }
        ,
        {
          "subject": 'Sejarah',
          "color":'',
          "clicked": false,
          "course": 'PT3'
        }
        ,
        {
          "subject": 'English',
          "color":'',
          "clicked": false,
          "course": 'PT3'
        }

      ],
      UPSR: [
        {
          "subject": 'English',
          "color":'',
          "clicked": false,
          "course": 'UPSR'
        }
        ,
        {
          "subject": 'Science',
          "color":'',
          "clicked": false,
          "course": 'UPSR'
        }
        ,
        {
          "subject": 'Mathematics',
          "color":'',
          "clicked": false,
          "course": 'UPSR'
        }
        ,
        {
          "subject": 'Bahasa Malaysia',
          "color":'',
          "clicked": false,
          "course": 'UPSR'
        }
      ],
      chosen:[],
      random:''

    };
  }

  addSubject(subject) {

    let chosenSubject = this.state.chosen


    if (subject.clicked === false) {
      if (subject.course === "SPM"){
        this.setState(prevState => ({
          SPM: prevState.SPM.map(course =>
            course.subject === subject.subject ?
            {...course,
              clicked: true,
              color:'#d5d3eb'
            }: course)
        }))
      }
      if (subject.course === "IGCSE"){
        this.setState(prevState => ({
          IGCSE: prevState.IGCSE.map(course =>
            course.subject === subject.subject ?
            {...course,
              clicked: true,
              color:'#d5d3eb'
            }: course)
        }))
      }

      if (subject.course === "STPM"){
        this.setState(prevState => ({
          STPM: prevState.STPM.map(course =>
            course.subject === subject.subject ?
            {...course,
              clicked: true,
              color:'#d5d3eb'
            }: course)
        }))
      }

      if (subject.course === "IBDIPLOMA"){
        this.setState(prevState => ({
          IBDIPLOMA: prevState.IBDIPLOMA.map(course =>
            course.subject === subject.subject ?
            {...course,
              clicked: true,
              color:'#d5d3eb'
            }: course)
        }))
      }

      if (subject.course === "IBMYP"){
        this.setState(prevState => ({
          IBMYP: prevState.IBMYP.map(course =>
          course.subject === subject.subject ?
              {...course,
                clicked: true,
                color:'#d5d3eb'
              }: course)
        }))
      }

      if (subject.course === "PT3") {
        this.setState(prevState => ({
          PT3: prevState.PT3.map(course =>
          course.subject === subject.subject ?
          {...course,
            clicked: true,
            color:'#d5d3eb'
          }: course)
        }))
      }

      if (subject.course === "UPSR") {
        this.setState(prevState => ({
          PT3: prevState.PT3.map(course =>
          course.subject === subject.subject ?
          {...course,
            clicked: true,
            color:'#d5d3eb'
          }: course)
        }))
      }
      console.log('added')
      chosenSubject.push(subject)
      this.setState({
        chosen: chosenSubject,
      })
      console.log(subject, 'subject added')
    }
    else {

      this.setState(prevState => ({
        SPM: prevState.SPM.map(course =>
          course === subject ?
          {...course,
            clicked: false,
            color:' '
          }: course),
        IGCSE: prevState.IGCSE.map(course =>
            course === subject ?
            {...course,
              clicked: false,
              color:' '
            }: course),
            STPM: prevState.STPM.map(course =>
              course.subject === subject.subject ?
              {...course,
                clicked: false,
                color:''
              }: course),
            IBDIPLOMA: prevState.IBDIPLOMA.map(course =>
                course.subject === subject.subject ?
                {...course,
                  clicked: false,
                  color:''
                }: course),
            IBMYP: prevState.IBMYP.map(course =>
              course.subject === subject.subject ?
                  {...course,
                    clicked: false,
                    color:''
                  }: course),
            PT3: prevState.PT3.map(course =>
                    course.subject === subject.subject ?
                    {...course,
                      clicked: false,
                      color:''
                    }: course),
            UPSR: prevState.UPSR.map(course =>
                      course.subject === subject.subject ?
                      {...course,
                        clicked: false,
                        color:''
                      }: course)
      }))

      console.log('removed')
      console.log(subject, 'removed subject')
      var array = this.state.chosen
      console.log(array)
      var index = array.indexOf(subject)
      console.log(index)
        array.splice(index, 1);
        this.setState({chosen: array});
      console.log(this.state.chosen, 'removing chosen subjects')
    }
  }

  removeSubject(subject) {

    console.log(subject, "subject cancelled from list of chosen subjects")
    var array = this.state.chosen
    var index = array.indexOf(subject)
    console.log(index)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({chosen: array});
    }

    if (subject.course === "SPM"){
      this.setState(prevState => ({
        SPM: prevState.SPM.map(course =>
          course.subject === subject.subject ?
          {...course,
            clicked: false,
            color:''
          }: course)
      }))
    }

    if (subject.course === "IGCSE"){
      this.setState(prevState => ({
        IGCSE: prevState.IGCSE.map(course =>
          course.subject === subject.subject ?
          {...course,
            clicked: false,
            color:''
          }: course)
      }))
    }

    if (subject.course === "STPM"){
      this.setState(prevState => ({
        STPM: prevState.STPM.map(course =>
          course.subject === subject.subject ?
          {...course,
            clicked: false,
            color:''
          }: course)
      }))
    }

    if (subject.course === "IBDIPLOMA"){
      this.setState(prevState => ({
        IBDIPLOMA: prevState.IBDIPLOMA.map(course =>
          course.subject === subject.subject ?
          {...course,
            clicked: false,
            color:''
          }: course)
      }))
    }

    if (subject.course === "IBMYP"){
      this.setState(prevState => ({
        IBMYP: prevState.IBMYP.map(course =>
        course.subject === subject.subject ?
            {...course,
              clicked: false,
              color:''
            }: course)
      }))
    }

    if (subject.course === "PT3") {
      this.setState(prevState => ({
        PT3: prevState.PT3.map(course =>
        course.subject === subject.subject ?
        {...course,
          clicked: false,
          color:''
        }: course)
      }))
    }

    if (subject.course === "UPSR") {
      this.setState(prevState => ({
        PT3: prevState.PT3.map(course =>
        course.subject === subject.subject ?
        {...course,
          clicked: false,
          color:''
        }: course)
      }))
    }



    console.log(subject, 'subject removed')
    console.log(this.state.chosen, 'chosen subjects')
  }

  render()
  {
    return (
      <div style={{overflowX:'hidden'}}>
        <Navbar className="Navbar"/>
        <MainTitle/>
        <div className="p-5"style={{backgroundColor:'#d5d3eb', width:'100vw', height:'100%', position:'relative'}}>
          <div className="d-flex justify-content-center text-center">
          <h3 className="Course">Choose a subject from the boxes below </h3>
          </div>

          <div className="CalculatorContainer d-flex justify-content-center p-4" style={{width:'100%'}}>
            <div className="p-4" style={{backgroundColor:'#e7e6f5', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
              <h6 className="Course px-4">Choosen Subjects</h6>
              {
                this.state.chosen.map( subjects =>
                  <div className="d-flex">
                    <div className="d-flex Cancel" onClick={()=> {this.removeSubject(subjects)}} >
                      <text className="Cancel"  style={{color:'red'}}>&#10005;</text>
                    </div>
                    <div className="d-flex ml-2 w-50 justify-content-start">
                      {subjects.subject}({subjects.course})
                    </div>
                  </div>
                )
              }
              <div className="d-flex justify-content-center pt-3">
                <button className="p-2 SubmitButton" style={{borderRadius:'10px'}} >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <StackGrid
            columnWidth={250}
            gutterWidth={20}
            gutterHeight={20}
          >
            <div className="CourseContainer p-3" key="key2" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
                <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >SPM</h1>
                </div>
                  {
                    this.state.SPM.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
            <div className="CourseContainer p-3" key="key3" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
                <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >IGSCE</h1>
                </div>
                  {
                    this.state.IGCSE.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
            <div className="CourseContainer p-3" key="key4" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
                <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >UPSR</h1>
                </div>
                  {
                    this.state.UPSR.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
            <div className="CourseContainer p-3" key="key5" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
                <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >PT3</h1>
                </div>
                  {
                    this.state.PT3.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
            <div className="CourseContainer p-3" key="key6" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
                <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >IB-MYP</h1>
                </div>
                  {
                    this.state.IBMYP.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
            <div className="CourseContainer p-3" key="key7" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
            <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >IB-DIPLOMA</h1>
                </div>
                  {
                    this.state.IBDIPLOMA.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
            <div className="CourseContainer p-3" key="key8" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
            <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >IB-MYP</h1>
                </div>
                  {
                    this.state.IBMYP.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
            <div className="CourseContainer p-3" key="key9" style={{backgroundColor:'#e7e6f5', width:'100%', height:'100%', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
            <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1 className="Course" >STPM</h1>
                </div>
                  {
                    this.state.STPM.map( subject =>
                      <div className="Subjects d-flex pl-3" style={{backgroundColor:subject.color}} onClick={()=>{this.addSubject(subject)}}>
                        {subject.subject}
                      </div>
                    )
                  }
            </div>
          </StackGrid>
          <div style={{position:'absolute',marginTop:'-40%', zIndex:'0'}}>
            <img src={circles} alt="jadestargraphics" style={{height:"70%", width:"70%", objectFit:"contain"}}/>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center p-5" style={{height:'auto', width:'auto', backgroundColor:'#e7e6f5'}}>
        <div className="d-flex justify-content-center text-center">
          <h3 className="Course p-3"> Promotions for the month of December 2019 </h3>
          </div>
          <img src={poster} alt="jadestargraphics" style={{ height:"90vh", objectFit:"contain"}}/>
          <div className="d-flex justify-content-center pt-3">
            <button className="p-2 BookingButton" style={{borderRadius:'10px'}} >
              <a className="BookingLink"  href="https://docs.google.com/forms/d/e/1FAIpQLSd0o7M41UGs2OcJNPDJ105d5B9-p7HT4ffEii9L3TtOBDvlGA/viewform">CLICK HERE TO BOOK NOW</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;