


import React from 'react';
import {
Container,
Row,Col
} from 'react-bootstrap';
import "../../css/Feature.css";
import "../../css/Custom.scss";

import "../../css/Animation.css";



const Feature = (props) => {
return (
    <div className={props.bg}>
    <Container fluid>
            <div className='text-center' style={{maxWidth:700,margin:"auto"}}>
                <br/><br/>
                <h1 className={props.variant}>{props.title}</h1>
                <h6 className={props.variant}>{props.body}</h6>
            </div>
            <br/>
            <Row className="text-center">
                    {
                    props.items.map(function(item,index){
                        return(
                                <Col key={index} xs={12} md={true} sm={12}>
                                    {item}
                                </Col>
                        )
                    })
                    }
            </Row>


            <br/>

            <div className='text-center'>
                {
                props.button ? props.button:null
                }
            </div>

        <br/>
    </Container>
    </div>
);
};

export default Feature;
