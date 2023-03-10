/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from "react";
import demo from "../Config";
import { Button,Spinner,Form} from 'react-bootstrap';
import "../css/Auth.css";

function Reset(props) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, startLoader] = useState(false);


    useEffect(() => {
        localStorage.removeItem('account');
    },[]);


    var auth = (value) => {
        props.Auth(value);
        localStorage.removeItem('account');
    }

    var reset = (e) => {
        e.preventDefault();
        if(email){
            startLoader(true);
            fetch(demo.api+'user/reset/password',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email: email })
                }).then(response => response.json())
                .then((Data) => {
                    startLoader(false);
                    console.log(Data);
                    if(Data.success){
                        setTimeout(function(){
                            auth("sent");
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
        <Form onSubmit={reset}>
            <img
                alt="logo"
                src={demo.icon}
                style={{height:58,margin:"auto"}}
            />
            <br/>
            <h3><b>Reset Passord</b></h3>
            <h5></h5>
           
            {error ? <small style={{color:"red"}}>{error}</small>:null}
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className="form-control mt-1" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
            </Form.Group>
            <br/>
          
            <Form.Group className="mb-3">
            <Button disabled={isLoading || !email} variant="dark" type="submit" size='lg' style={{width:"95%"}}>
                {isLoading ? (
                        <Spinner  as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true" variant="light" />
                ) : 'Send'}
            </Button>
            </Form.Group>
        </Form>

        <div className="text-center padding">
            <p className="forgot-password">
            Already have an account? <a onClick={() => auth("login")} className="link-primary">click here</a>
            </p>
        </div>
    </div>
                  
    </>
  )
}


export default Reset;