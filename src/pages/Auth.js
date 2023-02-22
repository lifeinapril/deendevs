import React from "react";
import demo from "../Config";
import { Col,Row } from 'react-bootstrap';

import "../css/Auth.css";

function Auth(props) {
  return (
    <>
    <br/>
    <br/>
    <br/>

                            <Row>
                                <Col md={3} lg={3} sm={false} xs={false}>  
                                </Col>
                                <Col md={6} lg={6} sm={12} xs={12}>  



                                        <div className="Auth-form-container">
                                        <form className="Auth-form">
                                            <div className="Auth-form-content">
                                            <img
                                                alt="logo"
                                                src={demo.icon}
                                                style={{height:58,margin:"auto"}}
                                            />
                                            <br/>
                                            <br/>
                                            <h3 className="Auth-form-title">Sign In</h3>

                                            <div className="form-group mt-3">
                                                <label>Email address</label>
                                                <input type="email" className="form-control mt-1" placeholder="Enter email"/>
                                            </div>
                                            <br/>
                                            <br/>
                                            <div className="form-group mt-3">
                                                <label>Password</label>
                                                <input type="password" className="form-control mt-1" placeholder="Enter password"/>
                                            </div>
                                            <p className="forgot-password text-right mt-2">
                                                Forgot <a href="/password/reset">password?</a>
                                            </p>
                                            <br/>
                                            <div className="form-group mt-3">
                                                <button style={{width:"95%"}} type="submit" className="btn btn-lg btn-dark">
                                                Login
                                                </button>
                                            </div>
                                            <br/>
                                            </div>
                                            <div className="text-center">
                                                Not registered yet?{" "}
                                                <span className="link-primary">
                                                Sign Up
                                                </span>
                                            </div>
                                        </form>
                                        </div>


                                </Col> 
                                <Col md={2} lg={2} sm={false} xs={false}>  
                                </Col>
                            </Row>
                  
    </>
  )
}


export default Auth;