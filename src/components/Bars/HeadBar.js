import React from 'react';
import "../../css/Header.css";
import demo from "../../Config";
import {
Navbar,NavDropdown,
Nav
} from 'react-bootstrap';
import Socials from '../Items/Social';
import BookButton from '../Buttons/BookButton';
import CloudButton from '../Buttons/CloudButton';

class HeadBar extends React.Component{
  constructor(props) {
    super();
  }

  render(){

 
return (
<>
      <Navbar sticky="top" variant={this.props.dark ? "dark":"light"} expand="lg" className={this.props.dark ? 'bg-dark headbar justify-content-evenly':'bg-light headbar justify-content-evenly'}>
            <Navbar.Brand href="/">
            {this.props.icon ? 
            <>
                      <img
                        alt="logo"
                        src={this.props.icon}
                        style={{height:28,margin:"auto"}}
                      />&nbsp;<b className='red'>Deen</b> {this.props.name ? this.props.name:'Developers'}
            </>:null
              }

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="menu" />
            <Navbar.Collapse id="menu" className="justify-content-end">
              <Nav>
                <Nav.Link href="/">&nbsp;Develop &nbsp;</Nav.Link>&nbsp;&nbsp;
                <Nav.Link href="/cloud">&nbsp;Cloud &nbsp;</Nav.Link>&nbsp;&nbsp;
                <NavDropdown title="  Partners  " id="basic-nav-dropdown">
                  {
                  demo.partners.map(function(item,index){
                            return (
                              <NavDropdown.Item  key={index} href={"/#"+item.name}>&nbsp;&nbsp;{item.name}&nbsp;&nbsp;</NavDropdown.Item>
                            )
                  })
                }
                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>&nbsp;&nbsp;
                <Nav.Link href="/team">&nbsp;Our Team &nbsp;</Nav.Link>&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Nav>
              <Nav>
                {/* <Socials/> */}
                <CloudButton  variant="dark"/>
                {this.props.tunnel ? 
                  this.props.tunnel:null
                    }
              </Nav>
            </Navbar.Collapse>
            
      </Navbar>
    </>

);

  }

};

export default HeadBar;
