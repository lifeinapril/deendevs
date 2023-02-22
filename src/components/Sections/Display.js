


import React from 'react';

import "../../css/Jumbo.css";

const Display = (props) => {
return (
 <div className='text-center light tint' style={{backgroundImage: `url(${props.image}`}}>
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
</div>
);

};

export default Display;
