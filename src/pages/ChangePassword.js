/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from "react";
import { useNavigate,useLocation, useParams } from 'react-router-dom';
import demo from "../Config";
import { Col,Row, Button,Spinner,Form} from 'react-bootstrap';
import "../css/Auth.css";

function ChangePassword(props) {
    const {token}=useParams();
    const [password, setPass] = useState('');
    const [retypepassword, retypePass] = useState('');
    const [error, setError] = useState('');
    const [isLoading, startLoader] = useState(false);
    const navigate = useNavigate();

    var changePass= (e) => {
        e.preventDefault();
        if(password===retypepassword){
            startLoader(true);
            fetch(demo.api+'user/update',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({token:token, password: password })
                }).then(response => response.json())
                .then((Data) => {
                    startLoader(false);
                    console.log(Data);
                    if(Data.success){
                        localStorage.setItem('account',Data.token);
                        setTimeout(function(){
                            navigate("/");
                        },1000);
                    }else{
                        setError(Data.message);
                        setTimeout(function(){
                            navigate("/");
                        },2000);
                    }
                })
                .catch((err) => {
                    startLoader(false);
                console.log(err.message);
                });
        }else{
            setError("password does not match!");
        }
     };


  return (
    <>
    <br/>
    <br/>

    <Row>
        <Col md={3} lg={3} sm={false} xs={false}>  
        </Col>
        <Col md={6} lg={6} sm={12} xs={12}>  
     <div className="Auth-form">
        <Form onSubmit={changePass}>
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
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" className="form-control mt-1" disabled={isLoading} value={password} onChange={e => setPass(e.target.value)} placeholder="Enter password"/>
            </Form.Group>
            <br/>

            <Form.Group className="mb-3">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control type="password" className="form-control mt-1" disabled={isLoading} value={retypepassword} onChange={e => retypePass(e.target.value)} placeholder="Enter password"/>
            </Form.Group>
          
            <Form.Group className="mb-3">
            <Button disabled={isLoading || !retypepassword || !password} variant="dark" type="submit" size='lg' style={{width:"95%"}}>
                {isLoading ? (
                        <Spinner  as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true" variant="light" />
                ) : 'Confirm'}
            </Button>
            </Form.Group>
        </Form>
    </div>
    </Col>
    <Col md={2} lg={2} sm={false} xs={false}>  
    </Col>
   </Row>

                  
    </>
  )
}


export default ChangePassword;