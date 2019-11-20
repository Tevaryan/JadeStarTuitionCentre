import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Background from "../assets/background.jpg"
import '../App.css'

export default class Navbar extends Component {

  render() {
    return (
      <div style={{backgroundImage:`url(${Background})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}     >
        <div className='BackgroundImage'>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'100%', width: '100%'}}>

            <div className='w-75 text-center TextContainer'>
              <font className='font-weight-bold TuitionName'  style={{ color:'#992525', fontSize:'100px'}}>JADE STAR</font>
              <div className='d-flex flex-row justify-content-center flex-wrap '>
                <div className="mx-4 Description" style={{}}>
                  <h4>Tuition Center</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex SellingPointsContainer align-items-center ' style={{width:'100vw', height:'auto', backgroundColor:''}}>
          <div className="d-flex  align-items-center SellingPointContainer flex-column p-5" style={{width:'100%', height:'100%'}} >
            <div className="mb-2 mt-0" >
              <h4 className="SellingPoint" style={{borderBottom: "3px solid  #9e3846"}} >One on One Tutorials</h4>
            </div>
            <div className="SellingPointDescription">
              High quality and personalised interaction with our tutors ensure your children gets the maximum amount of attention and care they need to excel.
            </div>
          </div>
          <div className="d-flex align-items-center SellingPointContainer flex-column p-5" style={{width:'100%', height:'100%'}}>
            <div className="mb-2 mt-0" >
              <h4 className="SellingPoint" style={{borderBottom: "3px solid  #9e3846"}}>Group Tutorials</h4>
            </div>
            <div className="SellingPointDescription">
              A small group of students usually three to five students. The sessions are carefully designed to ensure optimal result for every student.
            </div>
          </div>
        </div>
      </div>
    );
  }
}