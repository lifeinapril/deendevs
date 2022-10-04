import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class LoginButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        path:""
        }
  }

  render(){

return (
            <>
            <Button as={Link} to={this.state.path} variant="red" size='lg'>Login / Register</Button>
            </>

);

  }

};

export default LoginButton;
