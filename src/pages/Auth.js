import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import { Col,Row} from 'react-bootstrap';
import "../css/Auth.css";
import Login from "./Login";
import Register from "./Register";

function Auth() {
    const [loginAuth, setAuth] = useState(true);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const callback = params.get('callback');
    const navigate = useNavigate();

      useEffect(() => {
        if(window.gapi){
         window.gapi.load('auth2', function() {
            window.gapi.auth2.init({
            client_id: '609843450228-sit635nrrbcqbi1ql68gkjluiohn4055.apps.googleusercontent.com'
            });
        });
        }
        const account = localStorage.getItem('account');
        if(account){
          console.log(account);
        localStorage.removeItem('account');
            if(callback){
                navigate(callback+account);
             }else{
                navigate("/");
            }
         }
        }, []);
   

     function onSignIn(googleUser) {
            const p = googleUser.getBasicProfile();
            console.log('ID: ' + p.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + p.getName());
            console.log('Image URL: ' + p.getImageUrl());
            console.log('Email: ' + p.getEmail()); // This is null if the 'email' scope is not present.
            }

  return (
    <>
    <br/>
    <br/>
    <br/>

                            <Row>
                                <Col md={3} lg={3} sm={false} xs={false}>  
                                </Col>
                                <Col md={6} lg={6} sm={12} xs={12}>  
                                  {loginAuth ? <Login Auth={setAuth} googleAuth={onSignIn}/>:<Register  Auth={setAuth} googleAuth={onSignIn}/>}  
                                  </Col> 
                                <Col md={2} lg={2} sm={false} xs={false}>  
                                </Col>
                            </Row>
                  
    </>
  )
}


export default Auth;