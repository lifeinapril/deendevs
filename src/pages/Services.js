import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import { Col, Container, Row } from 'react-bootstrap';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Brief from '../components/Sections/Brief';
import Title from '../components/Sections/Title';


class Services extends React.Component {
  render() {
        return (
            <>
            <HeadBar dark={this.props.dark}name={demo.sub} icon={demo.icon}/>
            <Title bg="bg-dark text-left" variant="light" name="What we do?"/>
            <Container className="bg-grey">
                <br/>
                <br/>
                {
                demo.services.map(function(service,index){
                return (<>
                            <Brief key={index} name={service.name} id={service.name} dark={false} data={service} set={(index % 2) ? "last":"first"} image={service.image}/>
                            <br/>
                            <br/>
                        </>)
                })
                }
            </Container>

            <Foot contacts={demo.contacts} services={demo.services} bg="bg-dark" name={demo.name} icon={demo.icon}/>
           </>
        );
    }

}

export default Services;
