import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import {Container} from 'react-bootstrap';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import Title from '../components/Sections/Title';


class Approach extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={this.props.dark} name={demo.sub} icon={demo.icon_white}/>
            <Title bg="bg-dark text-left" variant="light" name="Our approach"/>
            <br/>
            <Container>
                
                {
                demo.approach.map(function(p,index){
                return (
                    <>
                    <Brief key={index} name={p.name} id={p.name} dark={(index % 2) ? true:false} data={p} list={p.capabilities} full={(index % 2) ? true:false} set={(index % 2) ? "last":"first"} image={p.image}  icon={p.icon}/>
                    <br/>
                    <br/>
                     </>
                            )
                })
                }
            </Container>

            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
           </>
        );
    }

}

export default Approach;
