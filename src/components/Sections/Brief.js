import React from 'react';
import {
Container,
Row,
Col
} from 'react-bootstrap';
import "../../css/Brief.css";
import List from '../Items/List';
import ListLink from '../Items/ListLinks';


class Brief extends React.Component {
    constructor(props) {
        super();
        this.ref = React.createRef();
      }
    
    render(){
        const bg={
            backgroundImage:`url(${this.props.image}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight:300,
            padding:10
        }

return (
   
<div style={this.props.full ? bg:null}>
<br/>
<br/>
<br/>
<br/>

    <div>
        <Row className={this.props.align}>
            <Col  xs={12} sm={12} md={{span:5,order: this.props.set }} className={ this.props.dark ? 'brief-dark':'brief-light'}>
             <br/>
             <br/>
             <br/>
            <div ref={this.ref} className='sec padding'>      
                {
                this.props.icon ? (<div className={'brief-icon '+ (this.props.dark ? 'light':'dark')}>{this.props.icon}</div>):null
                }
                {
                    this.props.data.name ?
                        <h6 className={this.props.dark ? 'light':'dark'}><b>{this.props.data.name}</b>:</h6>
                        :null
                }    
                {
                    this.props.data.title ?
                    <div className='brief-head'>
                        <b className={this.props.dark ? 'light':'dark'}>{this.props.data.title}</b>
                    </div>:null
                }
                <br/>
                <div className='brief-body'>
                    <p className={this.props.dark ? 'light':'dark'}>
                    {this.props.data.body}
                    </p>
                 {
                    this.props.linklist ? <ListLink items={this.props.linklist}/>:null
                    }
                </div>
                {
                this.props.list ? <List items={this.props.list}/>:null
                }
                <br/>
                {
                this.props.button ? this.props.button:null
                }
                    
            </div>
            </Col>

            <Col  xs={this.props.full ? false:12} md={5} className={this.props.border ? `${this.props.border}`:null}  style={this.props.full ? null:bg}>
            </Col>

            <br/>
            <br/>

        </Row>  
    </div>
    <br/>
    <br/>
    <br/>
    <br/>

</div>
);
            }

};

export default Brief;
