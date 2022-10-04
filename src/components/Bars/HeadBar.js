import React from 'react';
import "../../css/Header.css";
import {
Navbar,
Nav
} from 'react-bootstrap';
import LoginButton from '../Buttons/LoginButton';

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
                        style={{height:28,margin:"auto",marginTop:-8}}
                      />&nbsp;<b className='red'>DEEN</b> {this.props.name ? this.props.name:''}
            </>:null
              }

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="menu" />
            <Navbar.Collapse id="menu" className="justify-content-end">
              <Nav>
                <Nav.Link href="/">&nbsp;Home &nbsp;</Nav.Link>&nbsp;&nbsp;
                <Nav.Link href="/develop">&nbsp;Develop &nbsp;</Nav.Link>&nbsp;&nbsp;
                <Nav.Link href="/cloud">&nbsp;Cloud &nbsp;</Nav.Link>&nbsp;&nbsp;
                {/* <NavDropdown title="  Partners  " id="basic-nav-dropdown">
                  {
                  demo.partners.map(function(item,index){
                            return (
                              <NavDropdown.Item  key={index} href={"/#"+item.name}>&nbsp;&nbsp;{item.name}&nbsp;&nbsp;</NavDropdown.Item>
                            )
                  })
                } */}
                  {/* <NavDropdown.Divider /> */}
                {/* </NavDropdown>&nbsp;&nbsp; */}
                <Nav.Link href="/team">&nbsp;Our Team &nbsp;</Nav.Link>&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Nav>
              <Nav>
                {/* <Socials/> */}
                <LoginButton  variant="dark"/>
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
