


import React from 'react';
import {
Container
} from 'react-bootstrap';

import "../../css/Jumbo.css";

const Display = (props) => {
return (
 <div className='text-center light tint' style={{backgroundImage: `url(${props.image}`}}>
<Container fluid>
<br/>
<br/>
        <h1 style={{fontSize:70}}>{props.title}</h1>
        <p>
        {props.body}
        </p>
        <p>
          <br/>
                {
                props.button ? props.button:null
                }
        </p>
        <br/>

</Container>
</div>
);

};

export default Display;
