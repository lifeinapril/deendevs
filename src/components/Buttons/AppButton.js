import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class AppButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        }
  }

  render(){

return (
            // <Link to={this.props.path}>
             <Button variant='red' as={Link} target="_blank" to={this.props.path || this.props.path.to} state={this.props.path.state ? this.props.path.state:null} size='md'>{this.props.title ? this.props.title:"Learn More"}</Button>
            // </Link>

);

  }

};

export default AppButton;
