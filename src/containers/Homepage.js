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
            <div key="key2" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh'}}>Item 2</div>
            <div key="key3" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh'}}>Item 3</div>
            <div key="key4" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh'}}>Item 4</div>
            <div key="key5" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh'}}>Item 5</div>
            <div key="key6" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh'}}>Item 6</div>
            <div key="key7" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh'}}>Item 7</div>
            <div key="key8" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'30vh'}}>Item 8</div>
            <div key="key9" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh'}}>Item 9</div>
            <div key="key10" style={{backgroundColor:'#e7e6f5', width:'20vw', height:'20vh'}}>Item 10</div>
          </StackGrid>
        </div>
      </>
    )
  }
}

export default Homepage;