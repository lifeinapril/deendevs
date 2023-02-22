


import React from 'react';

import "../../css/Jumbo.css";

const Jumbo = (props) => {
return (
<div className={`box text-left`} style={{backgroundImage: `url(${props.image}`}}>
<br/><br/>
<br/><br/>
<br/><br/>
  <div className='padding'>
          <p style={{maxWidth:"450px"}}>
            <b style={{fontSize:35}}>{props.title}</b>
          </p>
          <p style={{maxWidth:"340px"}}>
            {props.body}
          </p>
          <br/>
          <p>
                  {
                  props.button ? props.button:null
                  }
          </p>
          <br/>
  </div>
</div>

);

};

export default Jumbo;
