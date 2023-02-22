import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FcRightUp} from "react-icons/fc";


class MoreButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        }
  }

  render(){

return (
            // <Link to={this.props.path}>
             <Button variant='dark' as={Link} to={this.props.path || this.props.path.to} state={this.props.path.state ? this.props.path.state:null} size='md'>{this.props.title ? this.props.title:"Learn More"} <FcRightUp color="#ffffff" size={14}/></Button>
            // </Link>

);

  }

};

export default MoreButton;
