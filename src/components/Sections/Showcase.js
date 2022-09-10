


import React from 'react';
import {
    Col,Row
} from 'react-bootstrap';
import "../../css/Custom.scss";



const Showcase = (props) => {
return (
    <div className={`${props.bg} text-center padding`}>
           <Row>
           {
                props.items.map(function(item,index){
                            return (
                                <Col key={index} lg={true} md={true} sm={12}>
                                {item}
                                </Col>
                            )
                    })
                } 
            </Row>
    </div>
);
};

export default Showcase;
