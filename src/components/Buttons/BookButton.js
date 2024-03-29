import React,{useState} from 'react';
import "../../css/Buttons.css";
import "../../css/Offcanvas.css";
import {
Button,Offcanvas,Form,Alert
} from 'react-bootstrap';
import appicon from "../../logo.png";
import API from '../../API';

function BookButton(props){

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [resBody, setBody] = useState({});
  

  const [Loading, startLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showAlert, setAlert] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendrequest = event => {
                                startLoading(true);
                                var data={
                                  full_name:name,
                                  phone:phone,
                                  email:email
                                };
                                API.post(`services/request`,data).then(res =>{
                                  console.log(res);
                                  console.log(data);
                                  setBody(res.data);
                                  setAlert(true);
                                  startLoading(false);
                                });
                                event.preventDefault();
                              }

return (
 <>

<Alert show={showAlert}  variant={resBody.status ? "success":""}>
  <Alert.Heading>{resBody.message}</Alert.Heading>
</Alert>



            <Button onClick={handleShow} variant="light" href={props.path} size='lg'>Let's create</Button>


            <Offcanvas variant="dark" className="bg-grey" show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header variant="light" closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>

                <div className='text-center'>
                            <img
                        alt="logo"
                        src={appicon}
                        style={{height:80}}
                        className="d-inline-block align-top"
                      />
                      <br/>
                      <br/>
                      <small>Deen developers brings intelligence to your business with the power of AI, We would create an engineering team all on a friendly budget</small>
                </div>
                  <br/>
                <Form onSubmit={e => {sendrequest(e)}}>
                      
                      <Form.Group>
                        <Form.Label>Company name:</Form.Label>
                        <Form.Control type="text" name='name' value={name} onChange={e => setName(e.target.value)} placeholder="Company name" />
                      </Form.Group>

                        <br/>
                      <Form.Group>
                        <Form.Label>What is your project solving:</Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" />
                      </Form.Group>
                      <br/>
                      <hr/>

                      <Form.Group className="mb-3">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="tel"  name='phone' value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your full name" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="tel"  name='phone' value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"  name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email/phone number with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <br/>
                      <Button disabled={Loading} variant="dark" size='lg' style={{width:"100%"}} type="submit">
                       {Loading ? "loading...":"Submit"}
                      </Button>
                    </Form>
                </Offcanvas.Body>
              </Offcanvas>
            </>

);

};

export default BookButton;
