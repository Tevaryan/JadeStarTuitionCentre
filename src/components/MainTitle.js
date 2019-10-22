import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../App.css'

export default class Navbar extends Component {

  render() {
    return (
      <div className="d-flex flex-row" style={{height:'80vh',width:'100vw', backgroundColor:'#e7e6f5'}}>
          <div className="p-5" style={{height:'100%',width:'50%'}}>
          <div className=" d-flex flex-column justify-content-center align-items-center" style={{height:'100%',width:'100%'}}>
              <div className="mb-4"style={{height:'50%',width:'100%', backgroundColor:'#d4d3e0'}} >
                TOP
              </div>
              <div style={{height:'20%',width:'100%', backgroundColor:'#d4d3e0'}}>
                BOTTOM
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-5" style={{height:'100%',width:'50%'}}>
            <div className="my-auto"style={{height:'100%',width:'100%', backgroundColor:'#d4d3e0'}} >
              Right
            </div>
          </div>
        </div>
    );
  }
}