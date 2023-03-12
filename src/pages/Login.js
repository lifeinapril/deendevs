/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import demo from "../Config";
import { Button,Spinner,Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../css/Auth.css";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLoading, startLoader] = useState(false);
    const navigate = useNavigate();



    var auth = (value) => {
        props.Auth(value);
    }

    var login = (e) => {
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
                    console.log(Data);
                    if(Data.success){
                        localStorage.setItem('account',Data.token);
                        setTimeout(function(){
                            navigate(props.callback+Data.token);
                        },1000);
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


  return (
    <>
     <div className="Auth-form">
        <Form onSubmit={login}>
            <img
                alt="logo"
                src={demo.icon}
                style={{height:58,margin:"auto"}}
            />
            <br/>
            <h3><b>Sign In</b></h3>
            <h5>Not registered yet? <a onClick={() => auth("register")} className="link-primary"> Sign Up</a></h5>
           
            {error ? <small style={{color:"red"}}>{error}</small>:null}
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
                Forgot password? <a onClick={() => auth("reset")}  className="link-primary">click here</a>
                </p>
        </div>
    </div>
                  
    </>
  )
}


export default Login;