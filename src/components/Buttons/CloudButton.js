import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MayaIcon from '../Items/MayaIcon';


class CloudButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        path:""
        }
  }

  render(){

return (
            <>
            <Button as={Link} to='/auth' variant={this.props.variant} size='lg'>Create an account&nbsp;<MayaIcon/></Button>
            </>

);

  }

};

export default CloudButton;
