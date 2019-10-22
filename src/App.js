import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Homepage from "./containers/Homepage.js"
import ContactUspage from "./containers/ContactUs.js"
import './App.css';


class App extends Component {

  render()
  {
    return (
      <>
        <Route exact path ={'/'} component={Homepage}/>
        <Route path ={'/ContactUs'} component={ContactUspage}/>
      </>
    )
  }
}

export default App;
