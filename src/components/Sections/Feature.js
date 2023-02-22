


import React from 'react';
import {
Row,Col
} from 'react-bootstrap';
import "../../css/Feature.css";
import "../../css/Custom.scss";

import "../../css/Animation.css";



const Feature = (props) => {
return (
    <div className={props.bg + " padding"}>
            <div className='text-center' style={{maxWidth:700,margin:"auto"}}>
                <br/><br/>
                <h1 className={props.variant}>{props.title}</h1>
                <h6 className={props.variant}>{props.body}</h6>
            </div>
            <Row>
                    {
                    props.items.map(function(item,index){
                        return(
                                <Col key={index} xs={12} md={true} lg={true} sm={12}>
                                    {item}
                                </Col>
                        )
                    })
                    }
            </Row>
    </div>
);
};

export default Feature;
