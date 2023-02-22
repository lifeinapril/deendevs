import React from "react";
import {
Container,Row,Col, Stack
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../../css/Header.css";
import { GrFacebook, GrInstagram, GrTwitter,GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";


class Foot extends React.Component{
  render(){

 
  return (
    <>
      <div  className={`${this.props.bg} text-left padding text-md-left`}>
      <Container fluid>
        <Row>
          <Col xs={12} md={8}  className="text-center">
          <img
            alt="logo"
            src={this.props.icon}
            style={{height:90}}
            className="d-inline-block align-top"
          />
          <br/>
          <br/>
          <br/>
            {/* <p>
              <br/>
              {this.props.address}
            </p> */}
          </Col>
          {/* <Col xs={12} lg={true} md={true}>
            <h5 className="title">Services</h5>
            <ul>
              {this.props.services ?
              this.props.services.map(function(link,i){
              return (
              <li key={i} className="list-unstyled">
                <Link key={i}  to={'/service#'+link.section} state={link}>{link.title}</Link>
              </li>)
              }):null}
            </ul>
          </Col> */}
          <Col xs={12} md={true}>
            <h5 className="title">Stay Connected</h5>

            <small><IoMdCall/> Call Us</small>
            <h6>{this.props.contacts.phone}</h6>
            <br/>
            <small><GrMail/> Email Us</small>
            <h6>{this.props.contacts.email}</h6>
            <br/>
            <br/>
            <Stack direction="horizontal" className='text-center' gap={4}>
              <GrFacebook as={Link} to={"https://facebook.com/" + this.props.contacts.facebook}></GrFacebook>
              <GrTwitter as={Link} to={"https://twitter.com/" + this.props.contacts.twitter}></GrTwitter>
              <GrInstagram as={Link} to={"https://facebook.com/" + this.props.contacts.GrInstagram}></GrInstagram>
            </Stack>
          </Col>
        </Row>
      </Container>
      </div>
      <div className={this.props.bg + " footer-copyright text-center py-3"}>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> {this.props.name} </a>
      </div>
    </>
  );
            }
}

export default Foot;