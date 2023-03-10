/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import demo from "../Config";
import { Button,Spinner,Form,Row,Col} from 'react-bootstrap';
import "../css/Auth.css";

function Register(props) {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [isLoading, startLoader] = useState(false);


    var auth = (value) => {
        props.Auth(value);
    }
    var register = (e) => {
        e.preventDefault();
            startLoader(true);
            fetch(demo.api+'user/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email: email, first_name: firstname,last_name:lastname,username:username })
                }).then(response => response.json())
                .then((Data) => {
                    startLoader(false);
                    if(Data.success){
                        localStorage.setItem('account',Data.data);
                        setTimeout(function(){
                            window.location.reload();
                        },1000);
                    }else{
                        setError(Data.message);
                    }
                })
                .catch((err) => {
                    startLoader(false);
                console.log(err.message);
                });
     };


  return (
    <>
     <div className="Auth-form">
        <Form onSubmit={register}>
            <img
                alt="logo"
                src={demo.icon}
                style={{height:58,margin:"auto"}}
            />
            <br/>
            <h3><b>Register</b></h3>
            {error ? <small style={{color:"red"}}>{error}</small>:null}
            <Row>
            <Form.Group as={Col}>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" className="form-control" disabled={isLoading} value={firstname} onChange={e => setFirstName(e.target.value)} placeholder="Enter your first name"/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" className="form-control" disabled={isLoading} value={lastname} onChange={e => setLastName(e.target.value)} placeholder="Enter your last name"/>
            </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" className="form-control mt-1" disabled={isLoading} value={username} onChange={e => setUsername(e.target.value)} placeholder="Example: aeby, jared, whitelion"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className="form-control mt-1" disabled={isLoading} value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
            </Form.Group>
            <br/>
            <br/>
            <br/>
            <Form.Group className="mb-3">
            <Button disabled={isLoading} variant="dark" type="submit" size='lg' style={{width:"95%"}}>
                {isLoading ? (
                        <Spinner  as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true" variant="light" />
                ) : 'Register'}
            </Button>
            </Form.Group>
        </Form>

        <button className="loginBtn loginBtn--google" onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>
                    Continue with Google
                </button>

        <div className="text-center padding">

                <p className="forgot-password">
                Already have an account? <a onClick={() => auth(true)} className="link-primary">click here</a>
                </p>
        </div>
    </div>
                  
    </>
  )
}


export default Register;