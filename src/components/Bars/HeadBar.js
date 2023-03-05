import React,{useState,useEffect} from 'react';
import "../../css/Header.css";
import {
Navbar,
Nav
} from 'react-bootstrap';
import LoginButton from '../Buttons/LoginButton';
import Profile from '../Items/Profile';
import demo from '../../Config';

function HeadBar(){
  const [user , setUser ] = useState(null);
  useEffect(() => {
                const account = localStorage.getItem('account');
                if(account){
                    fetch(demo.api+'user/info/'+account,{
                      method: 'GET',
                      headers: {
                          'Content-Type': 'application/json'
                        }
                      }).then(response => response.json())
                      .then((Data) => {
                          if(Data.success){
                            setUser(Data.data);
                          }
                      })
                      .catch((err) => {
                      console.log(err.message);
                      });
                }
}, []);
 
return (
<>
      <Navbar sticky="top" variant={this.props.dark ? "dark":"light"} expand="lg" className={this.props.dark ? 'bg-red headbar justify-content-evenly':'bg-light headbar justify-content-evenly'}>
            <Navbar.Brand href="/">
            {this.props.icon ? 
            <>
                      <img
                        alt="logo"
                        src={this.props.icon}
                        style={{height:50,margin:"auto",marginTop:0}}
                      />&nbsp;<b><span className='dark'>DEEN</span>DEVS</b>
            </>:null
              }

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="menu" />
            <Navbar.Collapse id="menu" className="justify-content-end">
              <Nav>
                <Nav.Link href="/">&nbsp;Home &nbsp;</Nav.Link>&nbsp;&nbsp;
                <Nav.Link href="/apps">&nbsp;Apps &nbsp;</Nav.Link>&nbsp;&nbsp;
                <Nav.Link href="/team">&nbsp;About Us &nbsp;</Nav.Link>&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Nav>
              <Nav>
                {user ? 
                <Profile image={demo.media+user.photo} name={user.first_name}/>:
                <LoginButton/>}
              </Nav>
            </Navbar.Collapse>
            
      </Navbar>
    </>
)

};

export default HeadBar;
