


import React from 'react';
import {
Container
} from 'react-bootstrap';

import "../../css/Jumbo.css";

const Jumbo = (props) => {
return (
<Container fluid className={`box text-left ${props.bg}`} style={{backgroundImage: `url(${props.image}`}}>
<br/><br/>
<br/><br/>
<br/><br/>
        <p style={{maxWidth:"450px"}}>
          <b style={{fontSize:50}}>{props.title}</b>
        </p>
        <p style={{maxWidth:"380px"}}>
         {props.body}
        </p>
          <br/>
        <p>
                {
                props.button ? props.button:null
                }
        </p>
        <br/>
</Container>

);

};

export default Jumbo;
