import React from 'react';
import "../../css/Splash.css";
import demo from "../../Config";
import {TransitionGroup,CSSTransition} from "react-transition-group";

class Splash extends React.Component {
    constructor(props) {
        super();
        this.ref = React.createRef();
      }
    
  render() {
        return (
            <>
            
  <TransitionGroup> 
            <CSSTransition classNames="splash" appear={true} in={true} timeout={600}>
 

            <div  className="bg-red">
            <div className="d-center align-items-center justify-content-center text-center min-vh-100">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <img 
                    alt="logo"
                    ref={this.ref}
                    src={demo.icon_white}
                    style={{height:120,display:"block",margin:"auto"}}
                    className="appicon"
                    />
                    <br/>

                    </div>
                </div>
            </CSSTransition>
          
  </TransitionGroup> 
           </>
        );
    }

}

export default  Splash;
