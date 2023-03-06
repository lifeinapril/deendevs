import React,{useState,useEffect} from "react";
import demo from "../Config";
import { useNavigate,useLocation } from 'react-router-dom';
import { Col,Row,Button,Spinner,Form} from 'react-bootstrap';
import "../css/Auth.css";

function Auth(props) {
    const { search } = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLoading, startLoader] = useState(false);
    const params = new URLSearchParams(search);
    const callback = params.get('callback');


      useEffect(() => {

    window.gapi.load('auth2', function() {
        window.gapi.auth2.init({
          client_id: '609843450228-sit635nrrbcqbi1ql68gkjluiohn4055.apps.googleusercontent.com',
        });
      });
      
        const account = localStorage.getItem('account');
        if(account){
            if(callback){
                navigate(callback+account);
             }else{
                navigate("/");
            }
         }
}, []);
    var Login = (e) => {
        e.preventDefault();
        if(email && password){
            startLoader(true);
            fetch(demo.api+'user/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email: email, password: password })
                }).then(response => response.json())
                .then((Data) => {
                    startLoader(false);
                    if(Data.success){
                        localStorage.setItem('account',Data.data);
                        if(callback){
                           navigate(callback+Data.data);
                        }else{
                           navigate("/");
                        }
                    }else{
                        setError(Data.message);
                    }
                })
                .catch((err) => {
                    startLoader(false);
                console.log(err.message);
                });
        }
     };

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
                                    <div className="Auth-form">
                                        <Form onSubmit={Login}>
                                           <img
                                                alt="logo"
                                                src={demo.icon}
                                                style={{height:58,margin:"auto"}}
                                            />
                                            <br/>
                                            <h3><b>Sign In</b></h3>
                                            <h5>Not registered yet? <a href="/register" className="link-primary"> Sign Up</a></h5>
                                            {error ? <e>{error}</e>:null}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" className="form-control mt-1" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
                                            </Form.Group>
                                            <br/>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" className="form-control mt-1" disabled={isLoading} value={password} onChange={e => setPass(e.target.value)} placeholder="Enter password"/>
                                            </Form.Group>
                                            <br/>
                                            <br/>
                                            <Form.Group className="mb-3">
                                            <Button disabled={isLoading || (!email && !password)} variant="dark" type="submit" size='lg' style={{width:"95%"}}>
                                                {isLoading ? (
                                                        <Spinner  as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true" variant="light" />
                                                ) : 'Login'}
                                            </Button>
                                            </Form.Group>
                                        </Form>

                                        <button className="loginBtn loginBtn--google" onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>
                                                    Continue with Google
                                                </button>

                                        <div className="text-center padding">

                                                <p className="forgot-password">
                                                Forgot password? <a href="/password/reset" className="link-primary">click here</a>
                                                </p>
                                        </div>
                                    </div>
                                </Col> 
                                <Col md={2} lg={2} sm={false} xs={false}>  
                                </Col>
                            </Row>
                  
    </>
  )
}


export default Auth;