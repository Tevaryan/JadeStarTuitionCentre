import React, { Component } from 'react';
import { Nav, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";
import '../App.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div style={{backgroundColor:'#EDEEF0', top:'0'}}>
        <div className="NavBarContainer">

          <Nav className="NavBarLarge" >
            <NavLink tag={Link} to={'/'} className="d-flex Nav-text NavOptions">Home</NavLink>
            <NavLink tag={Link} to={'/ContactUs'} className="d-flex Nav-text NavOptions">Contact Us</NavLink>
          </Nav>

          <Nav className="justify-content-end NavBarSmall">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle style={{backgroundColor:'#EDEEF0', borderColor:'transparent'}} >
                <img src="https://img.icons8.com/metro/26/000000/menu.png"/>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to={'/'} className="d-flex Nav-text NavOptions">Home</DropdownItem>
                <DropdownItem tag={Link} to={'/ContactUs'} className="d-flex Nav-text NavOptions">Contact Us</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Nav>
        </div>
      </div>
    );
  }
}