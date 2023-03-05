import React,{useState,useEffect} from "react";
import demo from "../Config";
import { useNavigate,useLocation } from 'react-router-dom';
import { Col,Row,Button,Spinner,Form } from 'react-bootstrap';
import "../css/Auth.css";

function Auth(props) {
    const { search } = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [isLoading, startLoader] = useState(false);
    const params = new URLSearchParams(search);
    const callback = params.get('callback');
      useEffect(() => {
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
                    }
                })
                .catch((err) => {
                console.log(err.message);
                });
        }
     };

     

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
                                        <Form className="Auth-form" onSubmit={Login}>
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
                                                <Form.Control type="email" className="form-control mt-1" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
                                            </div>
                                            <br/>
                                            <br/>
                                            <div className="form-group mt-3">
                                                <label>Password</label>
                                                <Form.Control type="password" className="form-control mt-1" disabled={isLoading} value={password} onChange={e => setPass(e.target.value)} placeholder="Enter password"/>
                                            </div>
                                            <p className="forgot-password text-right mt-2">
                                                Forgot <a href="/password/reset">password?</a>
                                            </p>
                                            <br/>
                                            <div className="form-group mt-3">
                                                <Button disabled={isLoading || (!email && !password)} variant="clear" type="submit" size='lg'>
                                                {isLoading ? (
                                                        <Spinner  as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true" variant="danger" />
                                                ) : 'Login'}
                                                </Button>
                                            </div>
                                            <br/>
                                            </div>
                                        </Form>
                                        <div className="text-center">
                                                Not registered yet? 
                                                <a href="/register" className="link-primary">
                                                Sign Up
                                                </a>
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