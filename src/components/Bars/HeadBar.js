import "../../css/Header.css";
import {
Navbar,
Nav
} from 'react-bootstrap';
import LoginButton from '../Buttons/LoginButton';
import Profile from '../Items/Profile';
import demo from '../../Config';

function HeadBar(props){
 
return (
<>
      <Navbar sticky="top" variant={props.dark ? "dark":"light"} expand="lg" className={props.dark ? 'bg-red headbar justify-content-evenly':'bg-light headbar justify-content-evenly'}>
            <Navbar.Brand href="/">
            {props.icon ? 
            <>
                      <img
                        alt="logo"
                        src={props.icon}
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
                {props.user ? 
                <Profile image={demo.media+props.user.photo} name={props.user.first_name}/>:
                <LoginButton/>}
              </Nav>
            </Navbar.Collapse>
            
      </Navbar>
    </>
)

};

export default HeadBar;
