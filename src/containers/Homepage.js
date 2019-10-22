import React, { Component } from 'react';
import Navbar from '../containers/Navbar.js';
import MainTitle from '../components/MainTitle.js'
import '../App.css';
import StackGrid from "react-stack-grid";


class Homepage extends Component {

  render()
  {
    return (
      <>
        <Navbar className="Navbar"/>
        <MainTitle/>
        <div className="p-5"style={{backgroundColor:'#d5d3eb', width:'100vw', height:'100%'}}>
          <StackGrid
            columnWidth={250}
            gutterWidth={20}
            gutterHeight={20}
          >
            <div className="CourseContainer" key="key2" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>
                <div className="d-flex justify-content-center" style={{width:'100%'}}>
                  <h1>SPM</h1>
                </div>
                <div className="Subjects d-flex pl-3">
                  Add Maths
                </div>
            </div>
            <div className="CourseContainer" key="key3" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 3</div>
            <div className="CourseContainer" key="key4" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 4</div>
            <div className="CourseContainer" key="key5" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 5</div>
            <div className="CourseContainer" key="key6" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 6</div>
            <div className="CourseContainer" key="key7" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 7</div>
            <div className="CourseContainer" key="key8" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 8</div>
            <div className="CourseContainer" key="key9" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 9</div>
            <div className="CourseContainer" key="key10" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh', boxShadow: '10px 10px 10px #c6c3e8', borderRadius:'10px'}}>Item 10</div>
          </StackGrid>
        </div>
      </>
    )
  }
}

export default Homepage;